// @/modules/projects/ProjectCardDesktop.tsx
"use client";

import React, { memo, useMemo } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import GithubStandardIcon from "@/components/clean/project/GithubStandardIcon";

interface Props {
  hashtags?: ReadonlyArray<string>;
  title: string;
  img: StaticImageData;
  link: string;
  github: string;
  priority?: boolean;
}

/**
 * Design/Perf:
 * - Fixed aspect ratio prevents CLS.
 * - Very light GPU hover (1.03) so no layout thrash.
 * - Tag chips capped to 3 (+N more).
 * - Palette: soft‑moss / creamy‑bone / creamy‑ivory to match your site.
 */
function Card({
  hashtags = [],
  title,
  img,
  link,
  github,
  priority = false,
}: Props) {
  const { shown, extra } = useMemo(() => {
    const MAX = 3;
    const list = Array.from(hashtags);
    return { shown: list.slice(0, MAX), extra: Math.max(list.length - MAX, 0) };
  }, [hashtags]);

  return (
    <article className="group relative w-full">
      {/* frame */}
      <div className="relative rounded-[2rem] border-creamy-sage border-2 bg-neon-one p-2 transition-colors duration-200 hover:bg-neon-one">
        {/* subtle offset plate */}
        <div className="pointer-events-none absolute -right-2 top-0 -z-10 h-[101%] w-[101%] rounded-[2.8rem] rounded-br-3xl bg-creamy-sage" />

        <div className="flex w-full flex-col items-center">
          {/* image */}
          <Link
            href={link}
            target="_blank"
            className="block w-full overflow-hidden rounded-3xl"
            aria-label={`${title} – open project`}
          >
            <div className="relative aspect-[16/9] w-full transform-gpu transition-transform duration-200 will-change-transform group-hover:scale-[1.33]">
              <Image
                src={img}
                alt={title}
                fill
                sizes="(max-width: 1200px) 50vw, 600px"
                priority={priority}
                loading={priority ? "eager" : "lazy"}
                className="object-cover"
              />
            </div>
          </Link>

          {/* meta */}
          <div className="mt-4 w-full">
            <div className="flex items-center justify-center gap-5">
              <h2 className="text-2xl font-semibold tracking-wide text-creamy-sage">
                {title}
              </h2>
              <GithubStandardIcon path={github} />
            </div>

            {/* tags */}
            {(shown.length > 0 || extra > 0) && (
              <ul className="mt-2 flex flex-wrap justify-center gap-2">
                {shown.map((tag, i) => (
                  <li
                    key={i}
                    className="rounded-full  bg-neon-two px-2.5 py-0.5 text-xs font-medium text-creamy-sage"
                  >
                    {tag}
                  </li>
                ))}
                {extra > 0 && (
                  <li className="rounded-full  bg-neon-two px-2.5 py-0.5 text-xs font-medium text-creamy-sage">
                    +{extra} more
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

const ProjectCardDesktop = memo(Card);
export default ProjectCardDesktop;
