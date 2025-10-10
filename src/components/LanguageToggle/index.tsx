"use client";

import Cookies from "js-cookie";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const LanguageToggle = () => {
  const router = useRouter();
  const locale = useLocale();

  const handleLocaleChange = (newLocale: string) => {
    Cookies.set("locale", newLocale);
    router.refresh();
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => handleLocaleChange("en")}
        className={`px-2 py-1 rounded-md text-sm ${
          locale === "en"
            ? "bg-slate-300 dark:bg-slate-700 font-bold"
            : "bg-slate-200 dark:bg-slate-800"
        }`}
        disabled={locale === "en"}
      >
        EN
      </button>
      <button
        onClick={() => handleLocaleChange("es")}
        className={`px-2 py-1 rounded-md text-sm ${
          locale === "es"
            ? "bg-slate-300 dark:bg-slate-700 font-bold"
            : "bg-slate-200 dark:bg-slate-800"
        }`}
        disabled={locale === "es"}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageToggle;
