// @/modules/home/LandingAnimatedStatsMobileScroll.tsx
"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { FaSchool } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FiGitCommit } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

// --- config ---
const ANIMATION_DURATION = 900; // faster for mobile
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

// --- animation hook ---
const useStatsAnimation = (targets: number[]) => {
  const [displayValues, setDisplayValues] = useState<number[]>(targets.map(() => 0));
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const runningRef = useRef(false);

  const start = useCallback(() => {
    if (runningRef.current) return;
    runningRef.current = true;
    startTimeRef.current = performance.now();
    setDisplayValues(targets.map(() => 0));

    const tick = (ts: number) => {
      const p = Math.min((ts - startTimeRef.current) / ANIMATION_DURATION, 1);
      const eased = EASING_FN(p);
      setDisplayValues(targets.map((t) => Math.floor(t * eased)));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else runningRef.current = false;
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [targets]);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);
  return { displayValues, start };
};

// --- viewport trigger ---
const ViewportTrigger = ({ children, onVisible }: { children: React.ReactNode; onVisible: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [fired, setFired] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired) {
          onVisible();
          setFired(true);
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [onVisible, fired]);

  return (
    <div ref={ref} className="w-full">{children}</div>
  );
};

// --- item (pill card) ---
const StatCard = ({ Icon, value, label }: StatItemData & { value: number }) => (
  <li
    role="listitem"
    className="group snap-center shrink-0 w-[78vw] sm:w-[60vw] mr-4 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm"
  >
    <div className="flex items-center gap-4">
      <div className="grid place-items-center rounded-xl bg-white/10 p-3">
        <Icon className="text-2xl text-primary transition-transform group-active:scale-95" />
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-semibold leading-none">{value.toLocaleString()}</span>
        <span className="text-[11px] uppercase tracking-[0.12em] text-white/70">{label}</span>
      </div>
    </div>
  </li>
);

// --- main ---
export default function LandingAnimatedStatsSwipeMobile() {
  const targets = STAT_ITEMS.map((s) => s.value);
  const { displayValues, start } = useStatsAnimation(targets);

  return (
    <section aria-label="Stats (mobile, scroll)" className="relative">
      <div className="mx-auto max-w-2xl px-5 py-8">
        <ViewportTrigger onVisible={start}>
          {/* Scroll container */}
          <ul
            role="list"
            aria-label="Stats list"
            className="flex snap-x snap-mandatory overflow-x-auto overflow-y-hidden [-webkit-overflow-scrolling:touch] scroll-smooth pr-5 pl-5 -ml-5 -mr-5"
          >
            {STAT_ITEMS.map((item, i) => (
              <StatCard key={item.label} Icon={item.Icon} value={displayValues[i]} label={item.label} />
            ))}
          </ul>
        </ViewportTrigger>
      </div>
    </section>
  );
}


