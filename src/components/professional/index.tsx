import { useTranslations } from "next-intl";

const Professional = () => {
  const t = useTranslations("Professional");

  return (
    <section className="w-full md:w-4/5 space-y-2 md:space-y-4">
      <div className="p-4 md:p-6 lg:p-12 bg-gray-600/30 dark:bg-black/60 shadow-[0_6px_25px_theme(colors.indigo.600/0.8)] dark:shadow-[0_6px_25px_rgba(59,130,246,0.25)] rounded-2xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold underline mb-4 text-center">
          {t("title")}
        </h2>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">
            {t("GoodsoftwaredevRole")}
          </h3>
          <p className="text-sm italic">{t("GoodsoftwaredevDate")}</p>
          <p className="mt-2 text-base leading-relaxed md:text-lg">
            {t.rich("GoodsoftwaredevDescription", {
              span: (chunks) => <span className="font-semibold">{chunks}</span>,
              br: () => <br />,
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Professional;
