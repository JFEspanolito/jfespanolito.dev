import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  clearGrimoireReleaseCache,
  getLatestGrimoireRelease,
  GRIMOIRE_RELEASES_FALLBACK_URL,
  parseGrimoireReleasePayload,
} from "./grimoireRelease";

const sampleRelease = {
  tag_name: "v0.1.18",
  html_url: "https://github.com/JFEspanolito/Grimoire-Maker/releases/tag/v0.1.18",
  draft: false,
  prerelease: false,
  assets: [
    {
      name: "Grimoire.Maker_0.1.18_universal.dmg",
      browser_download_url:
        "https://github.com/JFEspanolito/Grimoire-Maker/releases/download/v0.1.18/Grimoire.Maker_0.1.18_universal.dmg",
    },
    {
      name: "Grimoire.Maker_0.1.18_x64-setup.exe",
      browser_download_url:
        "https://github.com/JFEspanolito/Grimoire-Maker/releases/download/v0.1.18/Grimoire.Maker_0.1.18_x64-setup.exe",
    },
    {
      name: "Grimoire.Maker_0.1.18_x64-setup.exe.sig",
      browser_download_url:
        "https://github.com/JFEspanolito/Grimoire-Maker/releases/download/v0.1.18/Grimoire.Maker_0.1.18_x64-setup.exe.sig",
    },
    {
      name: "GrimoireMaker-portable-0.1.18-x64.zip",
      browser_download_url:
        "https://github.com/JFEspanolito/Grimoire-Maker/releases/download/v0.1.18/GrimoireMaker-portable-0.1.18-x64.zip",
    },
  ],
};

describe("grimoireRelease", () => {
  beforeEach(() => {
    clearGrimoireReleaseCache();
  });

  it("extracts Windows installer, portable zip, and macOS dmg regardless of version", () => {
    const parsed = parseGrimoireReleasePayload(sampleRelease);
    expect(parsed).toEqual({
      version: "v0.1.18",
      releaseUrl: "https://github.com/JFEspanolito/Grimoire-Maker/releases/tag/v0.1.18",
      windowsInstallerUrl:
        "https://github.com/JFEspanolito/Grimoire-Maker/releases/download/v0.1.18/Grimoire.Maker_0.1.18_x64-setup.exe",
      windowsPortableUrl:
        "https://github.com/JFEspanolito/Grimoire-Maker/releases/download/v0.1.18/GrimoireMaker-portable-0.1.18-x64.zip",
      macUniversalUrl:
        "https://github.com/JFEspanolito/Grimoire-Maker/releases/download/v0.1.18/Grimoire.Maker_0.1.18_universal.dmg",
    });
  });

  it("caches successful GitHub API responses and falls back on failure", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(
      new Response(JSON.stringify(sampleRelease), { status: 200 }),
    );

    const first = await getLatestGrimoireRelease(fetchMock);
    const second = await getLatestGrimoireRelease(fetchMock);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(first.windowsInstallerUrl).toBe(second.windowsInstallerUrl);

    clearGrimoireReleaseCache();
    const failingFetch = vi.fn<typeof fetch>().mockRejectedValue(new Error("network down"));
    const fallback = await getLatestGrimoireRelease(failingFetch);
    expect(fallback.releaseUrl).toBe(GRIMOIRE_RELEASES_FALLBACK_URL);
    expect(fallback.windowsInstallerUrl).toBeNull();
  });
});
