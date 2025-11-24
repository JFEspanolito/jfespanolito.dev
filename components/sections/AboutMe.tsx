"use client";

import { aboutData } from "@/data/about";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TextSpotlight } from "@/components/ui/text-spotlight";
import { Mail } from "@/components/icons/mail";
import { Github } from "@/components/icons/github";
import { Linkedin } from "@/components/icons/linkedin";
import { Twitter } from "@/components/icons/twitter";
import { Telegram } from "@/components/icons/telegram";
import { Wakatime } from "@/components/icons/wakatime";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const getIcon = (iconName: string, size: 1 | 2 | 3 = 1) => {
  const iconSizes = {
    1: "w-5 h-5", // Normal
    2: "w-6 h-6", // Grande
    3: "w-7 h-7", // Extra Grande
  };

  const iconClass = `${iconSizes[size]} fill-current text-white`;

  switch (iconName.toLowerCase()) {
    case "mail":
      return <Mail className={iconClass} />;
    case "github":
      return <Github className={iconClass} />;
    case "linkedin":
      return <Linkedin className={iconClass} />;
    case "twitter":
      return <Twitter className={iconClass} />;
    case "telegram":
      return <Telegram className={iconClass} />;
    case "wakatime":
      return <Wakatime className={iconClass} />;
    default:
      return <span className="text-xs">?</span>;
  }
};

export function AboutMe() {
  const lang = "ES";
  const profile = aboutData[lang]?.[0];
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isGalleryOpen) setIsGalleryOpen(false);
    };

    if (isGalleryOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isGalleryOpen]);

  if (!profile) return null;

  return (
    <>
      <motion.section
        className="flex flex-col items-center justify-center text-center py-20 space-y-10"
        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* --- AVATAR --- */}
        <div
          className="relative group cursor-pointer"
          onClick={() => setIsGalleryOpen(true)}
        >
          <div className="absolute -inset-1 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
          <Avatar className="relative h-40 w-40 border-4 border-[rgba(255,255,255,0.1)]">
            <AvatarImage
              src={profile.avatarUrl}
              alt={profile.name}
              className="object-cover"
            />
            <AvatarFallback className="text-3xl font-bold bg-slate-800 text-slate-200">
              {profile.nickname}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* --- LAYOUT --- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-full max-w-5xl px-4">
          <div className="h-auto md:h-24 flex items-center justify-center min-w-[300px]">
            <TextSpotlight
              text={profile.name}
              baseTextClassName="text-3xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight m-0"
              textClassName="text-3xl md:text-6xl font-extrabold tracking-tight text-[var(--primary)] leading-tight m-0"
              spotlightColor="var(--primary-rgb)"
              spotlightSize={150}
              animateOnPhone={true}
              className="flex items-center justify-center py-2"
            />
          </div>
        </div>

        {/* --- DESCRIPCIÓN Y ROL --- */}
        <div className="space-y-6 max-w-2xl px-4">
          <h1 className="text-3xl font-bold uppercase tracking-[0.3em] text-(--primary)">
            {profile.role}
          </h1>

          <p className="text-2xl md:text-2xl font-semibold text-(--text-muted)">
            {profile.headline}
          </p>

          {profile.description.map((parts, i) => (
            <p
              key={i}
              className="text-xl text-(--text-body) leading-relaxed font-light"
            >
              {parts.map((p, j) => {
                const style = p.customColor
                  ? { color: p.customColor }
                  : undefined;

                if (p.bold) {
                  return (
                    <strong key={j} style={style}>
                      {p.text}
                    </strong>
                  );
                }

                return (
                  <span key={j} style={style}>
                    {p.text}
                  </span>
                );
              })}
            </p>
          ))}
        </div>
      </motion.section>

      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsGalleryOpen(false)}
          >
            {/* Fondo oscuro */}
            <div className="absolute inset-0 bg-black/90" />

            {/* Proyección de selfie a la derecha (desktop) o centro (mobile) */}
            <motion.div
              className="absolute"
              initial={{
                top: "140px",
                left: "50%",
                width: "160px",
                height: "160px",
                x: "-50%",
              }}
              animate={{
                top: "50%",
                left:
                  typeof window !== "undefined" && window.innerWidth >= 768
                    ? "75%"
                    : "50%",
                width: "500px",
                height: "500px",
                x: "-50%",
                y: "-50%",
              }}
              exit={{
                top: "140px",
                left: "50%",
                width: "160px",
                height: "160px",
                x: "-50%",
                y: "0%",
              }}
              transition={{
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Imagen con borde brillante */}
              <div className="relative w-full h-full">
                {/* Glow effect */}
                <div className="absolute -inset-8 bg-linear-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-3xl blur-2xl opacity-60" />

                {/* Imagen */}
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="relative w-full h-full object-cover rounded-2xl border-4 border-white/20 shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Proyección de logo a la izquierda - solo desktop */}
            <motion.div
              className="absolute hidden md:block"
              initial={{
                top: "140px",
                left: "50%",
                width: "160px",
                height: "160px",
                x: "-50%",
              }}
              animate={{
                top: "50%",
                left: "25%",
                width: "400px",
                height: "400px",
                x: "-50%",
                y: "-50%",
              }}
              exit={{
                top: "140px",
                left: "50%",
                width: "160px",
                height: "160px",
                x: "-50%",
                y: "0%",
              }}
              transition={{
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Logo con borde brillante */}
              <div className="relative w-full h-full">
                {/* Glow effect */}
                <div className="absolute -inset-8 bg-linear-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-3xl blur-2xl opacity-60" />

                {/* Logo */}
                <img
                  src={profile.logoUrl}
                  alt="JF Logo"
                  className="relative w-full h-full object-contain rounded-2xl border-4 border-white/20 shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
