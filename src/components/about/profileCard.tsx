"use client";

import Image from "next/image";
import lightLogo from "@/img/profile/light_logo.png";
import darkLogo from "@/img/profile/dark_logo.png";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import "./index.css";

const ProfileCard = () => {
  const t = useTranslations("About");
  const { theme } = useTheme();
  return (
    <div className="flex items-center justify-evenly w-full text-left rounded-2xl p-4 lg:p-8 bg-gray-600/30 dark:bg-black/60 shadow-[0_6px_25px_theme(colors.indigo.600/0.8)] dark:shadow-[0_6px_25px_theme(colors.indigo.600/0.25)]">
      <div className="relative w-28 h-28 md:w-40 md:h-40">
        <Image
          src={theme === "dark" ? lightLogo : darkLogo}
          alt="Axel Soler Logo"
          fill
          priority
          sizes="100%"
        />
      </div>
      <div className="space-y-1 lg:space-y-2">
        <h1 className="text-xl md:text-4xl font-bold">AXEL SOLER</h1>
        <h2 className="text-lg md:text-3xl font-bold">{t("developer")}</h2>
        <h2 className="text-lg md:text-3xl">{t("specialist")}</h2>
      </div>
    </div>
  );
};

export default ProfileCard;
