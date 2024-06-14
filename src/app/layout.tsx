import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-12 lg:p-4 md:p-6 dark:bg-black ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
