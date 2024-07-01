"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const path_name = usePathname();
  return (
    <AnimatePresence>
      <div key={path_name}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}

          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />

        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
