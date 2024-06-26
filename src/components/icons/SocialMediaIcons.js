import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { useRouter } from "next/router";
import LightDarkModeSwticherIcon from "../hooks/LightDarkModeSwitcherIcon";

// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       delay: 0.4, // start after half a second
//       duration: 12,
//       staggerChildren: 1.5,
//     },
//   },
// };

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4, // start after half a second
      duration: 2,
      staggerChildren: 0.5,
    },
  },
};
const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const SocialMediaIcons = ({ size, mobilesize, className = "" }) => {
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(null); // Initialize with null

  const iconSize = windowWidth
    ? windowWidth >= 768
      ? size
      : mobilesize
    : mobilesize;

  useEffect(() => {
    setWindowWidth(window.innerWidth); // Update once on mount for initial size

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex items-center justify-center">
      <motion.div
        key={router.asPath}
        className="flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Twitter icon */}
        <motion.div
          className={`mx-3 rounded-full transition-all hover:bg-gray-200 dark:hover:bg-gray-700`}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.3 }}
          variants={item}
        >
          <motion.a
            href="https://twitter.com/aharoJ"
            target={"_blank"}
            className={`block p-3 text-dark dark:text-light md:p-0 ${className}`}
          >
            <FaXTwitter size={iconSize} className="" />
          </motion.a>
        </motion.div>

        {/* LinkedIn icon */}
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.3 }}
          variants={item}
          className={`mx-3 rounded-full transition-all hover:bg-gray-200 dark:hover:bg-gray-700 md:mx-6 `}
        >
          <motion.a
            href="https://www.linkedin.com/in/aharoj/"
            target={"_blank"}
            className={`block p-3 text-dark dark:text-light md:p-2 ${className}`}
          >
            <FaLinkedin size={iconSize} className="" />
          </motion.a>
        </motion.div>

        {/* GitHub icon */}
        <motion.div
          className={`mx-3 rounded-full transition-all hover:bg-gray-200 dark:hover:bg-gray-700`}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.3 }}
          variants={item}
        >
          <motion.a
            href="https://github.com/aharoJ"
            target={"_blank"}
            className={`block p-3 text-dark dark:text-light md:p-2 ${className}`}
          >
            <FaGithub size={iconSize} className="" />
          </motion.a>
        </motion.div>

        {/* Leetcode icon */}
        <motion.div
          className={`mx-3 rounded-full transition-all hover:bg-gray-200 dark:hover:bg-gray-700`}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.3 }}
          variants={item}
        >
          <motion.a
            href="https://leetcode.com/aharoJ/"
            target={"_blank"}
            className={`block p-3 text-dark dark:text-light md:p-2 ${className}`}
          >
            <SiLeetcode size={iconSize} className="" />
          </motion.a>
        </motion.div>
        <LightDarkModeSwticherIcon />
      </motion.div>
    </nav>
  );
};

export default SocialMediaIcons;
