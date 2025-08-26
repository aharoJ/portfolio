// @/modules/home/LandingAnimatedStatsSwipeMobile.tsx
"use client";

import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { FaSchool } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FiGitCommit } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

/* config */
const ANIMATION_DURATION = 900;
const EASE = (t: number) => t * t * (3 - 2 * t);

/* data */
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

/* hook: single RAF */
function useStatsAnimation(targets: number[]) {
  const [vals, setVals] = useState<number[]>(() => targets.map(() => 0));
  const rafRef = useRef<number>(0);
  const t0Ref = useRef<number>(0);
  const runningRef = useRef(false);

  const start = useCallback(() => {
    if (runningRef.current) return;
    runningRef.current = true;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setVals(targets);
      runningRef.current = false;
      return;
    }

    t0Ref.current = performance.now();
    setVals(targets.map(() => 0));

    const tick = (now: number) => {
      const p = Math.min((now - t0Ref.current) / ANIMATION_DURATION, 1);
      const eased = EASE(p);
      setVals(targets.map((t) => Math.floor(t * eased)));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else {
        setVals(targets);
        runningRef.current = false;
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [targets]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { vals, start };
}

/* viewport trigger */
function ViewportTrigger({
  onVisible,
  children,
}: {
  onVisible: () => void;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const firedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || firedRef.current) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      onVisible();
      firedRef.current = true;
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!firedRef.current && entry.isIntersecting) {
          onVisible();
          firedRef.current = true;
          io.disconnect();
        }
      },
      { threshold: 0.1 }, // quicker start
    );
    io.observe(el);
    return () => io.disconnect();
  }, [onVisible]);

  return (
    <div ref={ref} className="w-full">
      {children}
    </div>
  );
}

/* card (smaller + GPU) */
function StatCard({
  Icon,
  value,
  label,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
}) {
  return (
    <li
      className="
        transform-gpu
        snap-start shrink-0
        w-[70vw] xs:w-[64vw] sm:w-[52vw]
        rounded-2xl p-3
        bg-neon-one/85 backdrop-blur-[2px]
        ring-1 ring-creamy-sage/35
        transition-[transform,box-shadow,ring,background] duration-150
        hover:bg-neon-two/90 hover:ring-creamy-sage
        hover:shadow-[0_14px_34px_-12px_rgba(0,0,0,0.45)]
        will-change-transform
      "
    >
      <div className="flex items-center gap-2.5">
        <div
          className="
            transform-gpu
            grid place-items-center h-9 w-9 shrink-0
            rounded-xl bg-neon-two text-creamy-sage
            ring-1 ring-creamy-sage/55
          "
        >
          <Icon className="text-[17px]" aria-hidden="true" />
        </div>

        <div className="flex flex-col">
          <span className="text-[22px] leading-none font-semibold text-creamy-bone">
            {value.toLocaleString()}
          </span>
          <span className="mt-0.5 text-[9px] uppercase tracking-[0.18em] text-creamy-ivory/80">
            {label}
          </span>
        </div>
      </div>
    </li>
  );
}

/* main */
export default function LandingAnimatedStatsSwipeMobile() {
  const targets = useMemo(() => STAT_ITEMS.map((s) => s.value), []); // stable
  const { vals, start } = useStatsAnimation(targets);

  return (
    <section
      aria-label="Stats (Mobile)"
      className="relative overscroll-y-contain"
    >
      <div className="mx-auto max-w-2xl px-5 py-5">
        <ViewportTrigger onVisible={start}>
          <ul
            role="list"
            aria-label="Animated stats"
            className="
              stats-scroll
              -mx-5 px-5
              flex gap-2.5
              overflow-x-auto overflow-y-hidden
              snap-x snap-mandatory
              overscroll-x-contain
            "
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {STAT_ITEMS.map(({ Icon, label }, i) => (
              <StatCard
                key={label}
                Icon={Icon}
                value={vals[i] ?? 0}
                label={label}
              />
            ))}
          </ul>
        </ViewportTrigger>
      </div>
    </section>
  );
}
