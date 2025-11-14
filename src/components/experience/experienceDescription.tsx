import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import ExpandedContainer from "@/components/container/ExpandedContainer";

export default function ExperienceDescription({
  section,
  image,
  className,
}: {
  section: string;
  image: StaticImageData;
  className?: string;
}) {
  const t = useTranslations("Experience." + section);

  return (
    <div
      className={`${
        className || ""
      } text-base leading-relaxed md:text-lg bg-gradient-to-b dark:from-[#0a0f1f] dark:to-[#0e1630] p-4 lg:pt-8 rounded-2xl shadow-lg border border-violet-600 dark:border-white/10 transition-transform hover:scale-[1.02] hover:shadow-xl duration-300`}
    >
      <div className="flex justify-between gap-4 items-start">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">{t("degree")}</h3>
          <p className="text-sm italic">{t("date")}</p>
          <p className="mt-2 text-base leading-relaxed md:text-xl">
            {t.rich("shortDescription", {
              span: (chunks) => <span className="font-bold">{chunks}</span>,
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

      <ExpandedContainer
        text={t.rich("fullDescription", {
          span: (chunks) => <span className="font-bold">{chunks}</span>,
          br: () => <br />,
        })}
      />
    </div>
  );
}
