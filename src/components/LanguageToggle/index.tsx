"use client";

import { useState } from "react";
import Cookies from "js-cookie";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import ReactFlagsSelect from "react-flags-select";

const LanguageToggle = () => {
  const router = useRouter();
  const locale = useLocale();
  const [selected, setSelected] = useState(locale === "es" ? "AR" : "US");

  const handleLocaleChange = (newLocale: string) => {
    Cookies.set("locale", newLocale);
    router.refresh();
  };

  const onSelect = (code: string) => {
    const newLocale = code === "AR" ? "es" : "en";
    setSelected(code);
    handleLocaleChange(newLocale);
  };

  return (
    <div className="flex items-center w-full">
      <ReactFlagsSelect
        countries={["AR", "US"]}
        customLabels={{ AR: "ES", US: "EN" }}
        selected={selected}
        onSelect={onSelect}
        className="text-black w-full"
        selectButtonClassName="!bg-slate-200 dark:!bg-white"
      />
    </div>
  );
};

export default LanguageToggle;
