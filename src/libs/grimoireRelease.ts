export interface GrimoireReleaseInfo {
  version: string | null;
  releaseUrl: string;
  windowsInstallerUrl: string | null;
  windowsPortableUrl: string | null;
  macUniversalUrl: string | null;
}

const GITHUB_LATEST_RELEASE_API =
  "https://api.github.com/repos/JFEspanolito/Grimoire-Maker/releases/latest";
export const GRIMOIRE_RELEASES_FALLBACK_URL =
  "https://github.com/JFEspanolito/Grimoire-Maker/releases/latest";

const CACHE_TTL_MS = 15 * 60 * 1000;
const FETCH_TIMEOUT_MS = 4000;

interface CachedRelease {
  data: GrimoireReleaseInfo;
  expiresAt: number;
}

let cachedRelease: CachedRelease | null = null;

function isAllowedGitHubReleaseUrl(url: unknown, prefix: string): url is string {
  return typeof url === "string" && url.startsWith(prefix);
}

/**
 * Extracts direct installer URLs from a GitHub Releases API payload.
 */
export function parseGrimoireReleasePayload(payload: unknown): GrimoireReleaseInfo {
  const fallback: GrimoireReleaseInfo = {
    version: null,
    releaseUrl: GRIMOIRE_RELEASES_FALLBACK_URL,
    windowsInstallerUrl: null,
    windowsPortableUrl: null,
    macUniversalUrl: null,
  };

  if (!payload || typeof payload !== "object") {
    return fallback;
  }

  const record = payload as Record<string, unknown>;
  if (record.draft === true || record.prerelease === true) {
    return fallback;
  }

  const version =
    typeof record.tag_name === "string" && record.tag_name.trim().length > 0
      ? record.tag_name.trim()
      : null;

  const releaseUrl = isAllowedGitHubReleaseUrl(
    record.html_url,
    "https://github.com/JFEspanolito/Grimoire-Maker/releases/",
  )
    ? record.html_url
    : GRIMOIRE_RELEASES_FALLBACK_URL;

  const assets = Array.isArray(record.assets) ? record.assets : [];
  let windowsInstallerUrl: string | null = null;
  let windowsPortableUrl: string | null = null;
  let macUniversalUrl: string | null = null;

  for (const asset of assets) {
    if (!asset || typeof asset !== "object") continue;
    const { name, browser_download_url: downloadUrl } = asset as Record<string, unknown>;
    if (
      typeof name !== "string" ||
      !isAllowedGitHubReleaseUrl(
        downloadUrl,
        "https://github.com/JFEspanolito/Grimoire-Maker/releases/download/",
      )
    ) {
      continue;
    }

    if (!windowsInstallerUrl && name.endsWith("_x64-setup.exe")) {
      windowsInstallerUrl = downloadUrl;
    } else if (!windowsPortableUrl && /portable.*-x64\.zip$/i.test(name)) {
      windowsPortableUrl = downloadUrl;
    } else if (!macUniversalUrl && name.endsWith("_universal.dmg")) {
      macUniversalUrl = downloadUrl;
    }
  }

  return {
    version,
    releaseUrl,
    windowsInstallerUrl,
    windowsPortableUrl,
    macUniversalUrl,
  };
}

/**
 * Fetches the latest Grimoire Maker release metadata from GitHub with an in-memory TTL cache.
 */
export async function getLatestGrimoireRelease(
  fetchImpl: typeof fetch = fetch,
): Promise<GrimoireReleaseInfo> {
  const now = Date.now();
  if (cachedRelease && now < cachedRelease.expiresAt) {
    return cachedRelease.data;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetchImpl(GITHUB_LATEST_RELEASE_API, {
      signal: controller.signal,
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "jfespanolito.dev",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const payload: unknown = await response.json();
    const parsed = parseGrimoireReleasePayload(payload);
    cachedRelease = {
      data: parsed,
      expiresAt: now + CACHE_TTL_MS,
    };
    return parsed;
  } catch {
    if (cachedRelease) {
      return cachedRelease.data;
    }
    return {
      version: null,
      releaseUrl: GRIMOIRE_RELEASES_FALLBACK_URL,
      windowsInstallerUrl: null,
      windowsPortableUrl: null,
      macUniversalUrl: null,
    };
  } finally {
    clearTimeout(timeout);
  }
}

export function clearGrimoireReleaseCache(): void {
  cachedRelease = null;
}
