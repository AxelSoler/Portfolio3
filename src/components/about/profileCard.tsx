"use client";

import Image from "next/image";
import lightLogo from "@/img/profile/light_logo.png";
import darkLogo from "@/img/profile/dark_logo.png";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import { BiChevronDown, BiRocket } from "react-icons/bi";
import "./index.css";

const ProfileCard = () => {
  const t = useTranslations("About");
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="group w-full space-y-4 md:space-y-8 rounded-2xl p-4 lg:p-8 bg-gray-600/30 dark:bg-black/60 shadow-[0_6px_25px_theme(colors.indigo.600/0.8)] dark:shadow-[0_6px_25px_theme(colors.indigo.600/0.25)]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="flex items-center justify-evenly text-left"
      >
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <Image
            src={theme === "dark" ? lightLogo : darkLogo}
            alt="Axel Soler Logo"
            fill
            priority
            sizes="100%"
          />
        </div>
        <div className="space-y-1 lg:space-y-2">
          <h1 className="text-xl md:text-4xl font-bold">Axel Soler</h1>
          <h2 className="text-lg md:text-3xl font-bold">{t("developer")}</h2>
          <h2 className="text-lg md:text-3xl">{t("specialist")}</h2>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-64 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"
      />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg md:text-xl lg:text-2xl italic"
      >
        {t("goal")}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-64 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"
      />

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-3xl md:text-5xl mb-4"
      >
        {t("haveIdea")} <br className="lg:hidden" />
        <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-cyan-800 dark:from-blue-400 dark:via-cyan-200 dark:to-cyan-200 bg-clip-text text-transparent underline">
          {t("makeItReal")}
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto"
      >
        {t("collaborate")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="flex flex-wrap gap-6 justify-center items-center"
      >
        <Link
          href="#contact"
          className="group/btn px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 flex items-center gap-2"
        >
          <span>{t("contactLink")}</span>
          <BiRocket className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </Link>

        <Link
          href="#projects"
          className="px-8 py-4 bg-slate-800/50 border border-slate-600 text-slate-300 rounded-xl hover:bg-slate-700/50 hover:border-blue-500/50 hover:text-white transition-all duration-300 flex items-center gap-2"
        >
          <span>{t("experienceLink")}</span>
          <BiChevronDown className="w-5 h-5 rotate-[-90deg]" />
        </Link>
        <a
          href={t("resumeDownloadLink")}
          download
          className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition flex items-center gap-2"
        >
          {t("downloadCV")}
          <FaDownload />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ProfileCard;
