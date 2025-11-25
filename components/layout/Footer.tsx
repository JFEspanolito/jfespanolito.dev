"use client";

import { Github } from "@/components/icons/github";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-[#0a0811]/95 backdrop-blur-md mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div
          className="flex items-center justify-between"
          style={{ minHeight: "3rem" }}
        >
          {/* Izquierda: GitHub */}
          <a
            href="https://github.com/JFEspanolito/jfespanolito.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-md text-white hover:text-(--secondary-accent) transition-colors group"
          >
            <Github className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
            <span className="leading-none">{t('codeAvailable')}</span>
          </a>
          {/* Derecha: Copyright */}
          <p className="text-md text-white font-light text-right hover:text-(--secondary-accent) m-0">
            © {year} — {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
