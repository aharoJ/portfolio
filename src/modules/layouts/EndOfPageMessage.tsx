// @/modules/layouts/EndOfPageMessage.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

const EndOfPageMessage = () => {
  const [isEndOfPage, setIsEndOfPage] = useState(false);
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setIsEndOfPage(entries[0].isIntersecting),
      { threshold: 0.1 },
    );

    if (observerTarget.current) observer.observe(observerTarget.current);
    return () => {
      if (observerTarget.current) observer.unobserve(observerTarget.current);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div ref={observerTarget} className="h-1 w-full" />

      {isEndOfPage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-primary/60 backdrop-blur-lg text-black px-1 py-2 rounded-full flex items-center shadow-3xl animate-fade-in-up border border-black/10">
            <div className="flex items-center gap-3">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-5 hover:bg-gray-800/60 hover:text-primary pl-4 pr-5 py-2 rounded-full transition-all duration-300 transform hover:scale-[1.02] group"
              >
                <span className="text-sm font-semibold">Back to Top</span>
                <div className="bg-black/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                  <FaArrowUp className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform stroke-current" />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EndOfPageMessage;
