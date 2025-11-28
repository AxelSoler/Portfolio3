"use client";

import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface FlipCardProps {
  section: string;
  image: StaticImageData;
}

export default function FlipCard({ image, section }: FlipCardProps) {
  const t = useTranslations("Experience." + section);
  const [isFlipped, setIsFlipped] = useState(false);
  const backContentRef = useRef<HTMLDivElement>(null);

  const handleFlip = () => {
    setIsFlipped((prev) => {
      const newState = !prev;

      if (newState === true) {
        setTimeout(() => {
          backContentRef.current?.scrollTo({ top: 0 });
        }, 0);
      } else {
        setTimeout(() => {
          backContentRef.current?.scrollTo({ top: 0 });
        }, 0);
      }

      return newState;
    });
  };

  return (
    <div className="perspective-1000 h-[500px]">
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
      >
        {/* Front Side */}
        <motion.div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div
            className={`h-full bg-gray-600/30 dark:bg-black/60 backdrop-blur-sm border-3 border-violet-600 dark:border-blue-500/50 p-[2px] rounded-2xl shadow-[0_6px_25px_theme(colors.indigo.600/0.8)] dark:shadow-[0_6px_25px_theme(colors.indigo.600/0.25)]`}
          >
            <div className="h-full p-8 flex flex-col">
              <div className="flex justify-between gap-4 items-start mb-2 lg:mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {t("degree")}
                  </h3>
                  <p className="text-sm italic">{t("date")}</p>
                  <p className="mt-6 text-base leading-relaxed md:text-xl">
                    {t.rich("shortDescription", {
                      span: (chunks) => (
                        <span className="font-bold">{chunks}</span>
                      ),
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

              <button
                onClick={handleFlip}
                className="group/btn mt-auto cursor-pointer px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Show More</span>
                <BsArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute inset-0 backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div
            className={`h-full bg-gradient-to-br from-blue-500/50 to-cyan-500/50 p-[2px] rounded-2xl`}
          >
            <div ref={backContentRef} className="h-full bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-sm rounded-2xl p-8 flex flex-col overflow-y-auto">
              <h3 className="text-2xl text-white mb-6">{t("degree")}</h3>

              <div className="space-y-4 mb-6 flex-grow">
                {t.rich("fullDescription", {
                  span: (chunks) => <span className="font-bold">{chunks}</span>,
                  br: () => <br />,
                })}
              </div>

              <button
                onClick={handleFlip}
                className="group/btn cursor-pointer px-6 py-3 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600 hover:border-blue-500/50 text-slate-300 hover:text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <BsArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
                <span>Show Less</span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
