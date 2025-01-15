// ScrollToTopButton.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const SCROLL_THRESHOLD = 300; // px to scroll before button appears

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add listener on mount
    window.addEventListener("scroll", handleScroll);
    // Clean up on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="scrollButton"
          initial={{ opacity: 0, y: 100 }} // animate in from below
          animate={{ opacity: 1, y: 0 }} // fade in & slide up
          exit={{ opacity: 0, y: 100 }} // fade out & slide down
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="
            fixed 
            bottom-6 
            right-6 
            z-50 
            p-3 
            rounded-full 
            bg-primary
            text-black 
            hover:text-primary
            hover:bg-gray-800/60
            shadow-lg 
            transition-colors
            focus:outline-none
          "
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
