"use client";
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";

const ScrollListAnimation: React.FC<{
  reference: React.RefObject<HTMLLIElement>;
}> = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-primary ">
      <svg
        className="-rotate-90 w-[60px] h-[60px]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-black/30 "
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="fill-primary stroke-1 animate-bounce"
          // className="fill-primary stroke-1 animate-pulse" //  ORIGNAL
        />
      </svg>
    </figure>
  );
};
export default ScrollListAnimation;
