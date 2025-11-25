import config from "@/config";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { aboutData } from "@/data/about";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { SocialDock } from "@/components/layout/SocialDock";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: config.appName + " - " + aboutData.ES[0].nickname,
  description: config.appDescription,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-(--background) text-(--foreground)`}
      >
        <LanguageProvider>
          {/* Selector de idioma */}
          <LanguageSwitcher />

          {/* Contenido de la página */}
          {children}

          {/* Footer al final */}
          <Footer />

          {/* Menú Flotante de Botones Social Media */}
          <SocialDock />
        </LanguageProvider>
      </body>
    </html>
  );
}
