// path: @/modules/education/EducationDesktop.tsx

import React from "react";
import Image from "next/image";

const EducationDesktop = () => {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-creamyLight-pearl mb-4">
          EDUCATION
        </h2>
        <div className="w-40 h-1 bg-soft-moss mx-auto"></div>
      </div>

      {/* Single Compact Card */}
      <div className="bg-creamy-bone hover:bg-creamy-white p-8 rounded-xl border-4 border-soft-moss transition-all duration-300">
        <div className="flex items-start gap-8">
          {/* University Image */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-32 h-32 overflow-hidden rounded-xl shadow-lg">
              <div className="bg-creamy-ivory border border-dashed rounded-xl w-full h-full" />
              <div className="absolute inset-0 border-2 border-soft-moss rounded-xl">
                <Image
                  src="/education/grad.jpg"
                  alt="CSUDH"
                  fill
                  sizes="128px"
                  className="object-cover text-soft-slate"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-soft-slate mb-2">
              Bachelor of Science in Computer Science
            </h3>
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-soft-moss text-white px-3 py-1 rounded-md text-sm font-medium">
                California State University, Dominguez Hills
              </div>
              <div className="text-soft-slate">Carson, CA • GPA: 3.4</div>
            </div>

            {/* Key Highlights in one line */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                Google Scholar ($3K)
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                GMiS 2nd Place (300+ contestants)
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                Research Funding ($1.5K)
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                Robotics Program Lead
              </span>
            </div>

            {/* Quick coursework preview */}
            <p className="text-soft-slate text-sm leading-relaxed">
              <span className="font-semibold">Key Coursework:</span> Machine
              Learning • Data Structures • Software Development • Algorithm
              Analysis • Database Systems • Senior Design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDesktop;
