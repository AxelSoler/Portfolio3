"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("ThemeToggle");

  useEffect(() => {
    // Set default to dark if theme is not set yet
    if (!theme || theme === "system") {
      setTheme("dark");
    }
  }, [theme, setTheme]);

  return (
    <div className="flex justify-between gap-2 w-full">
      <button
        onClick={() => setTheme("light")}
        className="w-full p-2 lg:p-4 rounded-lg cursor-pointer border dark:border-black bg-gray-200 text-black lg:text-xl dark:bg-gray-700 transition-colors duration-500 ease-in-out"
      >
        {t("light")} 🌞
      </button>
      <button
        onClick={() => setTheme("dark")}
        className="w-full p-2 lg:p-4 rounded-lg cursor-pointer border dark:border-white text-slate-300 dark:bg-gray-900 dark:text-white lg:text-xl bg-gray-500 transition-colors duration-500 ease-in-out"
      >
        {t("dark")} 🌙
      </button>
    </div>
  );
}
