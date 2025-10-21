import Link from "next/link";
import { FaDownload, FaGoogleDrive } from "react-icons/fa";
import { useTranslations } from "next-intl";
import ExpandedContainer from "../container/ExpandedContainer";

export default function AboutSection() {
  const t = useTranslations("About");

  const DescriptionNode = () => (
    <div className="flex flex-col gap-4 mt-2">
      <p>{t("description2")}</p>
      <p>{t("description3")}</p>
      <p>{t("description4")}</p>
      <p>
        {t.rich("connect", {
          projectsLink: (chunks) => (
            <Link
              href="#projects"
              className="underline text-blue-700 dark:text-green-300"
            >
              {chunks}
            </Link>
          ),
          contactLink: (chunks) => (
            <Link
              href="#contact"
              className="underline text-blue-700 dark:text-green-300"
            >
              {chunks}
            </Link>
          ),
        })}
      </p>
      <div className="flex justify-center items-center gap-4 mt-8 mb-1">
        <a
          href={t("resumeDownloadLink")}
          download
          className="px-2 md:px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center gap-2"
        >
          {t("downloadCV")}
          <FaDownload />
        </a>
        <a
          href="https://drive.google.com/file/d/1Ful06pTzhNJO2ErFBoUAmNYZEsEeN1F2/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 md:px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition flex items-center gap-2"
        >
          Google Drive
          <FaGoogleDrive />
        </a>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-4 bg-gray-600/30 dark:bg-black/60 shadow-[0_6px_25px_theme(colors.indigo.600/0.8)] dark:shadow-[0_6px_25px_rgba(59,130,246,0.25)] p-4 lg:p-6 rounded-2xl md:min-h-[240px] h-fit">
      <h3 className="text-lg md:text-2xl font-bold border-b border-black dark:border-white">
        {t("title")}
      </h3>

      <p>{t("description1")}</p>

      <ExpandedContainer text={<DescriptionNode />} />
    </div>
  );
}
