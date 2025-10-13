"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import ExpandButton from "../buttons/expandButton";
import Image, { StaticImageData } from "next/image";

export default function Schooldescription({
  section,
  image,
}: {
  section: string;
  image: StaticImageData;
}) {
  const t = useTranslations("Education." + section);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-2 text-base leading-relaxed md:text-lg">
      <div className="flex justify-between gap-4 items-start">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">{t("degree")}</h3>
          <p className="text-sm italic">{t("date")}</p>
          <p className="mt-2 text-base leading-relaxed md:text-xl">
            {t.rich("shortDescription", {
              br: () => <br />,
            })}
          </p>
        </div>
        <Image
          src={image}
          alt={`${t("degree")} logo`}
          width={104}
          height={104}
          className="rounded-xl hidden lg:block"
        />
      </div>

      {expanded && <p>{t.rich("fullDescription", { br: () => <br /> })}</p>}

      <div className="flex justify-center my-4 md:my-6 lg:my-8">
        <ExpandButton
          onClick={() => setExpanded(!expanded)}
          expanded={expanded}
        />
      </div>
    </div>
  );
}
