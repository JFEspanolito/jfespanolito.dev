"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ES" | "EN";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  ES: {
    experience: "Experiencia",
    professional: "Profesional",
    projects: "Proyectos",
    certificates: "Certificados",
    clickForDetails: "Clic para detalles",
    activities: "Actividades",
    seeMore: "Ver más",
    allCertificates: "Todos los Certificados",
    codeAvailable: "Código disponible en GitHub",
    rights: "El código fuente de este sitio es público y puede consultarse y reutilizarse. La información personal y profesional presentada no está autorizada para copia ni redistribución.",
  },
  EN: {
    experience: "Experience",
    professional: "Professional",
    projects: "Projects",
    certificates: "Certificates",
    clickForDetails: "Click for details",
    activities: "Activities",
    seeMore: "See more",
    allCertificates: "All Certificates",
    codeAvailable: "Code available on GitHub",
    rights: "The source code of this site is public and may be viewed and reused. The personal and professional information presented is not authorized for copying or redistribution.",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ES");

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "ES" || saved === "EN")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ES] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
