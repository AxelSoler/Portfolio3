"use client";

import { useState, type ReactNode } from "react";
import ExpandButton from "../buttons/expandButton";

const ExpandedContainer = ({ text }: { text: ReactNode }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          expanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-2 leading-relaxed">{text}</div>
      </div>

      <div className="flex justify-center mt-2 md:mt-3 lg:mt-4">
        <ExpandButton
          onClick={() => setExpanded(!expanded)}
          expanded={expanded}
        />
      </div>
    </div>
  );
};

export default ExpandedContainer;
