// @/modules/homes/AnimateStatsDesktop.tsx
"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { FaSchool } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FiGitCommit } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

// Animation Configuration
const ANIMATION_DURATION = 1200; // 1.2 seconds for a snappy feel
const EASING_FN = (t: number) => t * t * (3 - 2 * t); // Smootherstep for smooth easing

// Stat Data Definition
interface StatItemData {
  Icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
}

const STAT_ITEMS: StatItemData[] = [
  { Icon: FaSchool, value: 13, label: "PARTNERSHIPS" },
  { Icon: GiTeacher, value: 127, label: "STUDENTS" },
  { Icon: FiGitCommit, value: 3809, label: "COMMITS" },
  { Icon: SiLeetcode, value: 214, label: "LeetCode" },
];

// Custom Hook for Multi-Stat Animation
const useStatsAnimation = (targets: number[]) => {
  const [displayValues, setDisplayValues] = useState<number[]>(
    targets.map(() => 0),
  );
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const isAnimatingRef = useRef(false);

  const startAnimation = useCallback(() => {
    if (isAnimatingRef.current) return; // Prevent restarting if already animating
    isAnimatingRef.current = true;

    startTimeRef.current = performance.now();
    setDisplayValues(targets.map(() => 0)); // Reset to 0 before animating

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
      const easedProgress = EASING_FN(progress);

      const currentValues = targets.map((target) =>
        Math.floor(target * easedProgress),
      );
      setDisplayValues(currentValues);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayValues(targets); // Ensure final values are exact
        isAnimatingRef.current = false;
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  }, [targets]);

  // Cleanup animation on unmount
  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return { displayValues, startAnimation };
};

// Viewport Trigger Component
const ViewportTrigger = ({
  children,
  onVisible,
}: {
  children: React.ReactNode;
  onVisible: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          onVisible();
          setHasTriggered(true); // Only animate once
        }
      },
      { threshold: 0.05 }, // Trigger when 5% of the section is visible
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [onVisible, hasTriggered]);

  return (
    <div ref={ref} className="w-full h-full">
      {children}
    </div>
  );
};

// Individual Stat Item Component
const StatItem = ({
  Icon,
  value,
  label,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-colors hover:bg-white/10">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="text-3xl text-primary transition-transform group-hover:scale-110" />
        <span className="text-4xl font-light bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
          {value.toLocaleString()}
        </span>
      </div>
      <h3 className="text-sm font-medium text-center tracking-wider text-white/75 group-hover:text-white transition-colors">
        {label}
      </h3>
    </div>
  );
};

// Main Stats Component
const LandingStatsDesktop = () => {
  const targets = STAT_ITEMS.map((item) => item.value);
  const { displayValues, startAnimation } = useStatsAnimation(targets);

  return (
    <section className="container mx-auto px-4 py-12">
      <ViewportTrigger onVisible={startAnimation}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STAT_ITEMS.map((item, index) => (
            <StatItem
              key={index}
              Icon={item.Icon}
              value={displayValues[index]}
              label={item.label}
            />
          ))}
        </div>
      </ViewportTrigger>
    </section>
  );
};

export default LandingStatsDesktop;
