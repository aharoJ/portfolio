// path: @/modules/home/LandingAnimatedStatsDesktop.tsx
"use client";

import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  memo,
  useMemo,
} from "react";
import { FaSchool } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FiGitCommit } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

/* ---------------- Animation ---------------- */
const ANIMATION_DURATION = 1200; // 1.2s — snappy
const EASING_FN = (t: number) => t * t * (3 - 2 * t); // smootherstep

/* ---------------- Data ---------------- */
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

/* ---------------- Hook: multi-stat counter ---------------- */
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

    const animate = (timestamp: number) => {
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
      const eased = EASING_FN(progress);

      setDisplayValues(targets.map((t) => Math.floor(t * eased)));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayValues(targets); // exact final state
        isAnimatingRef.current = false;
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  }, [targets]);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  return { displayValues, startAnimation };
};

/* ---------------- Viewport Trigger ---------------- */
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
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion: skip animation and trigger once.
    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const run = () => {
      onVisible();
      setHasTriggered(true);
    };

    if (prefersReduced && !hasTriggered) {
      run();
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) run();
      },
      { threshold: 0.05 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [hasTriggered, onVisible]);

  return (
    <div ref={ref} className="w-full h-full">
      {children}
    </div>
  );
};

/* ---------------- Stat Card (palette-matched) ---------------- */
interface StatProps {
  Icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
}

const StatCard = memo(function StatCard({ Icon, value, label }: StatProps) {
  const valueText = useMemo(() => value.toLocaleString(), [value]);

  return (
    <article
      className="
        group relative overflow-hidden
        rounded-2xl p-4
        bg-neon-one/90 backdrop-blur
        ring-1 ring-creamy-sage/40
        transition-[transform,box-shadow,ring,background] duration-150
        hover:bg-neon-two/90 hover:ring-creamy-sage
        hover:shadow-[0_18px_50px_-12px_rgba(0,0,0,0.45)]
        will-change-transform
      "
      aria-label={label}
    >
      {/* content */}
      <div className="flex items-center gap-4">
        {/* icon plate */}
        <div
          className="
            grid place-items-center h-12 w-12 shrink-0
            rounded-xl bg-neon-two text-creamy-sage
            ring-1 ring-creamy-sage/60
            transition-transform duration-150 group-hover:scale-105
          "
        >
          <Icon className="text-[22px]" aria-hidden="true" />
        </div>

        {/* numbers */}
        <div className="flex flex-col">
          <div
            className="
              text-4xl font-semibold leading-none
              text-creamy-bone
            "
          >
            {valueText}
          </div>
          <div
            className="
              mt-2 text-[11px] tracking-[0.2em]
              text-creamy-ivory/80
              uppercase
            "
          >
            {label}
          </div>
        </div>
      </div>
    </article>
  );
});

/* ---------------- Main ---------------- */
const LandingAnimatedStatsDesktop = () => {
  const targets = STAT_ITEMS.map((s) => s.value);
  const { displayValues, startAnimation } = useStatsAnimation(targets);

  return (
    <section className="container mx-auto px-6 py-12">
      <ViewportTrigger onVisible={startAnimation}>
        <div className="grid grid-cols-4 gap-6">
          {STAT_ITEMS.map((item, i) => (
            <StatCard
              key={item.label}
              Icon={item.Icon}
              value={displayValues[i]}
              label={item.label}
            />
          ))}
        </div>
      </ViewportTrigger>
    </section>
  );
};

export default LandingAnimatedStatsDesktop;
