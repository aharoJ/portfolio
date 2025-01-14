"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface WorkSliderBtnsProps {
  containerStyles: string;
  btnStyles: string;
  iconsStyles?: string;
}

const WorkSliderBtns: React.FC<WorkSliderBtnsProps> = ({
  containerStyles,
  btnStyles,
  iconsStyles,
}) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <PiCaretLeftBold
          className={iconsStyles}
          onClick={() => swiper.slidePrev()}
        />
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold
          className={iconsStyles}
          onClick={() => swiper.slideNext()}
        />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
