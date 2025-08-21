// @/modules/home/LandingAnimatedStatsMobile.tsx
"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { FaSchool } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FiGitCommit } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

// --- config (kept) ---
const ANIMATION_DURATION = 1200; // 1.2s
const EASING_FN = (t: number) => t * t * (3 - 2 * t);

// --- data ---
interface StatItemData {
  Icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
}

const STAT_ITEMS: StatItemData[] = [
  { Icon: FaSchool, value: 13, label: "Partnerships" },
  { Icon: GiTeacher, value: 127, label: "Students" },
  { Icon: FiGitCommit, value: 3809, label: "Commits" },
  { Icon: SiLeetcode, value: 214, label: "LeetCode" },
];

// --- hook ---
const useStatsAnimation = (targets: number[]) => {
  const [displayValues, setDisplayValues] = useState<number[]>(
    targets.map(() => 0),
  );
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const isAnimatingRef = useRef(false);

  const startAnimation = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    startTimeRef.current = performance.now();
    setDisplayValues(targets.map(() => 0));

    const animate = (ts: number) => {
      const elapsed = ts - startTimeRef.current;
      const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
      const eased = EASING_FN(progress);
      setDisplayValues(targets.map((t) => Math.floor(t * eased)));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayValues(targets);
        isAnimatingRef.current = false;
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  }, [targets]);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);
  return { displayValues, startAnimation };
};

// --- viewport trigger ---
const ViewportTrigger = ({
  children,
  onVisible,
}: {
  children: React.ReactNode;
  onVisible: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [fired, setFired] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired) {
          onVisible();
          setFired(true);
        }
      },
      { threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [onVisible, fired]);

  return (
    <div ref={ref} className="w-full h-full">
      {children}
    </div>
  );
};

// --- item (compact, mobile-first) ---
const StatItem = ({ Icon, value, label }: StatItemData & { value: number }) => (
  <div className="group flex items-center gap-4 rounded-xl border border-white/10 p-4 transition-colors hover:bg-white/5">
    <div className="grid place-items-center rounded-lg bg-white/5 p-2">
      <Icon className="text-2xl text-primary transition-transform group-hover:scale-110" />
    </div>
    <div className="flex flex-col">
      <span className="text-3xl font-semibold leading-none">
        {value.toLocaleString()}
      </span>
      <span className="mt-1 text-[11px] uppercase tracking-[0.12em] text-white/70">
        {label}
      </span>
    </div>
  </div>
);

// Main Stats Component
const LandingAnimatedStatsMobile = () => {
  const targets = STAT_ITEMS.map((s) => s.value);
  const { displayValues, startAnimation } = useStatsAnimation(targets);

  return (
    <section aria-label="Stats (mobile)" className="relative">
      <div className="mx-auto max-w-2xl px-5 py-10">
        <ViewportTrigger onVisible={startAnimation}>
          {/* Mobile-first: single column, then 2 cols for larger phones */}
          <div className="grid grid-cols-1 gap-4 xs:grid-cols-2">
            {STAT_ITEMS.map((item, i) => (
              <StatItem
                key={item.label}
                Icon={item.Icon}
                value={displayValues[i]}
                label={item.label}
              />
            ))}
          </div>
        </ViewportTrigger>
      </div>
    </section>
  );
};

export default LandingAnimatedStatsMobile;
