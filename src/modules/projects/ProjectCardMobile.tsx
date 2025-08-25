"use client";

import React, { memo, useMemo } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

interface Props {
  title: string;
  img: StaticImageData;
  link: string;
  github: string;
  hashtags?: ReadonlyArray<string>;
  priority?: boolean;
}

/**
 * Mobile Card:
 * - Fixed 16:9 to avoid CLS
 * - Light tap feedback (active:scale-95)
 * - Tags capped to 3 (+N more)
 * - Matches projects palette (neon-one / creamy-sage / neon-two)
 */
function Card({
  title,
  img,
  link,
  github,
  hashtags = [],
  priority = false,
}: Props) {
  const { shown, extra } = useMemo(() => {
    const MAX = 3;
    const list = Array.from(hashtags);
    return { shown: list.slice(0, MAX), extra: Math.max(list.length - MAX, 0) };
  }, [hashtags]);

  return (
    <article className="rounded-[1.5rem] border-2 border-creamy-sage/60 bg-neon-one p-4">
      {/* image */}
      <Link
        href={link}
        target="_blank"
        className="block overflow-hidden rounded-2xl active:scale-[0.98] transition-transform duration-150"
        aria-label={`${title} – open project`}
      >
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={img}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            className="object-cover"
          />
        </div>
      </Link>

      {/* meta */}
      <div className="mt-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="truncate text-lg font-semibold tracking-wide text-creamy-sage">
            {title}
          </h3>
          <Link
            href={github}
            target="_blank"
            aria-label="Open GitHub"
            className="grid h-8 w-8 place-items-center rounded-full active:scale-95"
          >
            <FaGithub className="text-xl text-creamy-sage" />
          </Link>
        </div>

        {(shown.length > 0 || extra > 0) && (
          <ul className="mt-2 flex flex-wrap gap-2">
            {shown.map((tag, i) => (
              <li
                key={i}
                className="rounded-full bg-neon-two px-2.5 py-0.5 text-[11px] font-medium text-creamy-sage"
              >
                {tag}
              </li>
            ))}
            {extra > 0 && (
              <li className="rounded-full bg-neon-two px-2.5 py-0.5 text-[11px] font-medium text-creamy-sage">
                +{extra} more
              </li>
            )}
          </ul>
        )}
      </div>
    </article>
  );
}

export default memo(Card);
