"use client";

import { useState, type ReactNode } from "react";
import ExpandButton from "../buttons/expandButton";

const ExpandedContainer = ({ text }: { text: ReactNode }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          expanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="mt-2 text-base leading-relaxed md:text-xl">{text}</p>
      </div>

      <div className="flex justify-center mt-4 md:mt-6 lg:mt-8">
        <ExpandButton
          onClick={() => setExpanded(!expanded)}
          expanded={expanded}
        />
      </div>
    </>
  );
};

export default ExpandedContainer;
