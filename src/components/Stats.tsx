"use client";
import React from "react";
import CountUp from "react-countup";

interface Stat {
  num: number;
  text: string;
}

const stats: Stat[] = [
  { num: 2, text: "Years of experience " },
  { num: 2, text: "Projects" },
  { num: 3000, text: "Code Commits" },
  { num: 102, text: "Leetcode" },
];

const Stats: React.FC = () => {
  return (
    <>
      <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
            {stats.map((item, index) => (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {" "}
                  {item.text}{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
