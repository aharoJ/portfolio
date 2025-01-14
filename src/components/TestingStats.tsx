import React, { JSX } from 'react';
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

// Define the data for the portfolio items
interface PortfolioItemData {
  icon: JSX.Element;
  number: number;
  title: string;
}

const portfolioItems: PortfolioItemData[] = [
  { icon: <FaReact />, number: 5, title: "Projects using React" },
  { icon: <FaNodeJs />, number: 3, title: "Projects using Node.js" },
  { icon: <FaDatabase />, number: 7, title: "Database Designs" },
  // Add more items as needed
];

// Define the props for the Portfolio component
interface PortfolioProps {
  containerStyles: string;
  itemStyles: string;
  iconStyles: string;
  numberStyles: string;
  titleStyles: string;
}

// Implement the Portfolio component
const Portfolio: React.FC<PortfolioProps> = ({ containerStyles, itemStyles, iconStyles, numberStyles, titleStyles }) => {
  return (
    <div className={containerStyles}>
      {portfolioItems.map((item, index) => (
        <div key={index} className={itemStyles}>
          <div className={iconStyles}>
            {item.icon}
          </div>
          <div>
            <div className={numberStyles}>{item.number}</div>
            <div className={titleStyles}>{item.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Define the main component that uses the Portfolio component
const TestingStats: React.FC = () => {
  return (
    <div className="p-2 container mx-auto">
      <Portfolio
        containerStyles="grid grid-cols-6 gap-4"
        itemStyles="flex items-center space-x-4 p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
        iconStyles="text-3xl"
        numberStyles="text-xl font-bold"
        titleStyles="text-lg"
      />
    </div>
  );
};

export default TestingStats;
