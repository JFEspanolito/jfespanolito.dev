"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/data/about";
import StylishDock from "@/components/ui/magicdock";
import { Mail } from "@/components/icons/mail";
import { Github } from "@/components/icons/github";
import { Linkedin } from "@/components/icons/linkedin";
import { Twitter } from "@/components/icons/twitter";
import { Telegram } from "@/components/icons/telegram";

const getIcon = (iconName: string, size: 1 | 2 | 3 = 2) => {
  const iconSizes = {
    1: "w-4 h-4", // Pequeño
    2: "w-6 h-6", // Mediano
    3: "w-8 h-8", // Grande
  };

  const sizeClass = iconSizes[size] || iconSizes[2];
  const iconClass = `${sizeClass} fill-current text-white`;

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
    default:
      return <span className="text-xs">?</span>;
  }
};

export function SocialDock() {
  const profile = aboutData.ES[0];
  if (!profile) return null;

  const dockItems = profile.social.map((social, index) => ({
    id: index,
    icon: getIcon(social.icon, 3),
    label: social.name,
    onClick: () => window.open(social.url, "_blank"),
  }));

  return (
    <motion.div
      className="fixed bottom-0 left-1/2 -translate-x-1/2 translate-y-1 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <StylishDock
        items={dockItems}
        baseItemSize={40}
        magnification={60}
        panelHeight={50}
        className="bg-transparent border-none shadow-none flex items-center"
        itemClassName="bg-transparent border-none shadow-none"
      />
    </motion.div>
  );
}
