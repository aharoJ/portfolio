// @/modules/home/LandingAnimatedStatsSwipeMobile.tsx
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
  const [displayValues, setDisplayValues] = useState<number[]>(
    targets.map(() => 0),
  );
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
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired) {
          onVisible();
          setFired(true);
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [onVisible, fired]);

  return (
    <div ref={ref} className="w-full">
      {children}
    </div>
  );
};

// --- main ---
export default function LandingAnimatedStatsSwipeMobile() {
  const targets = STAT_ITEMS.map((s) => s.value);
  const { displayValues, start } = useStatsAnimation(targets);

  return (
    // container section (trim vertical padding + stop scroll chaining)
    <section
      aria-label="Stats (mobile, scroll)"
      className="relative overscroll-y-contain"
    >
      <div className="mx-auto max-w-2xl px-5 py-6">
        <ViewportTrigger onVisible={start}>
          {/* Hides scrollbar globally for this class to avoid styled-jsx scoping issues */}
          <style jsx global>{`
            .stats-scroll::-webkit-scrollbar {
              display: none;
            }
            .stats-scroll {
              scrollbar-width: none; /* Firefox */
              -ms-overflow-style: none; /* IE/Edge legacy */
            }
          `}</style>

          <ul
            role="list"
            aria-label="Stats list"
            className={`
              stats-scroll
              flex snap-x snap-mandatory overflow-x-auto overflow-y-hidden
              overscroll-x-contain
              -mx-5 px-5 gap-3
            `}
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {STAT_ITEMS.map((item, i) => (
              <li
                key={item.label}
                className={`
                  snap-start shrink-0
                  w-[72vw] sm:w-[58vw]
                  rounded-xl border border-white/10 bg-white/5 p-4
                `}
              >
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center rounded-lg bg-white/10 p-2.5">
                    <item.Icon className="text-2xl text-primary" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl leading-none font-semibold">
                      {displayValues[i].toLocaleString()}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.12em] text-white/70">
                      {item.label}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </ViewportTrigger>
      </div>
    </section>
  );
}
