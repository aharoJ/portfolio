"use client";
import React, { useRef, useEffect, FC } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { IconType } from "react-icons";
import { FaSchool } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FiGitCommit } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

// Data definition
interface StatItemData {
  icon: IconType;
  value: number;
  label: string;
}

const statItems: StatItemData[] = [
  // { icon: BsFileEarmarkBinary, value: 5, label: "LANGUAGES" },
  // { icon: FaDatabase, value: 4, label: "DATABASES" },
  { icon: FaSchool, value: 13, label: "PARTNERSHIPS" },
  { icon: GiTeacher, value: 127, label: "STUDENTS" },
  { icon: FiGitCommit, value: 3003, label: "COMMITS" },
  { icon: SiLeetcode, value: 214, label: "LeetCode" },
];

// AnimateNumbers component
interface AnimateNumbersProps {
  value: number;
  numberStyles: string;
}

const AnimateNumbers: FC<AnimateNumbersProps> = ({ value, numberStyles }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 8000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value.toString()) {
        ref.current.textContent = latest.toFixed();
      }
    });
  }, [springValue, value]);

  return <span ref={ref} className={numberStyles}></span>;
};

// LoadIcon component
interface LoadIconProps {
  icon: IconType;
  value: number;
  label: string;
  iconStyles: string;
  numberStyles: string;
  labelStyles: string;
}

const LoadIcon: FC<LoadIconProps> = ({
  icon: Icon,
  value,
  label,
  iconStyles,
  numberStyles,
  labelStyles,
}) => {
  return (
    <div className="container flex flex-col items-end justify-center mx-auto">
      <div className="flex flex-row items-center space-x-2">
        {Icon && <Icon className={iconStyles} />}
        <AnimateNumbers value={value} numberStyles={numberStyles} />
      </div>
      <h2 className={labelStyles}>{label}</h2>
    </div>
  );
};

// Return LandingStatsMobile component
const LandingStatsMobile: FC = () => {
  return (
    <section className="contianer flex flex-wrap justify-center items-center mx-auto p-1 my-6 ">
      <div className=" grid grid-cols-2 gap-y-12 gap-x-4">
        {statItems.map((item, index) => (
          <LoadIcon
            key={index}
            icon={item.icon}
            value={item.value}
            label={item.label}
            iconStyles="text-5xl"
            numberStyles="inline-block text-3xl font-light"
            labelStyles="text-xl font-light capitalize tracking-wide text-dark/75 dark:text-light/75"
          />
        ))}
      </div>
    </section>
  );
};

export default LandingStatsMobile;
