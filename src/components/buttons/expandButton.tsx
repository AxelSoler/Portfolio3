import { useTranslations } from "next-intl";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ExpandButton = ({
  onClick,
  expanded,
}: {
  onClick: () => void;
  expanded: boolean;
}) => {
  const t = useTranslations("Buttons");
  return (
    <button
      onClick={onClick}
      className="self-center flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl cursor-pointer transition-all duration-300 shadow-md hover:scale-105"
    >
      {expanded ? (
        <FaChevronUp className="transition-transform duration-300 mt-1" />
      ) : (
        <FaChevronDown className="transition-transform duration-300 mt-1" />
      )}
      {expanded ? t("showLess") : t("showMore")}
      {expanded ? (
        <FaChevronUp className="transition-transform duration-300 mt-1" />
      ) : (
        <FaChevronDown className="transition-transform duration-300 mt-1" />
      )}
    </button>
  );
};

export default ExpandButton;
