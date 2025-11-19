import { Inter } from "next/font/google";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/layout/LayoutClient";
import Analytics from "@/components/layout/Analytics";
import config from "@/config";
import "../styles/globals.css";

const font = Inter({ subsets: ["latin"] });

export const viewport = {
    themeColor: config.colors.main,
    width: "device-width",
    initialScale: 1,
};

export const metadata = {
    ...getSEOTags(),
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/icon.webp", type: "image/webp" },
        ],
        apple: [{ url: "/apple-icon.webp" }],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme={config.colors.theme} className={font.className}>
            <body>
                {/* Wrappers de cliente: toasts, tooltips, Crisp, etc. */}
                <ClientLayout>{children}</ClientLayout>

                {/* Analytics (GA4/Clarity con consentimiento + Speed Insights) */}
                <Analytics />
            </body>
        </html>
    );
}
