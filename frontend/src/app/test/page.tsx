import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import TestingStats from "@/components/TestingStats";
import LandingDesktopProject from "@/components/casa/LandingDesktopProject";
import LandingMobileProject from "@/components/casa/LandingMobileProject:";
import LandingStats from "@/components/clean/home/LandingStats";
import HomeAnnouncement from "@/components/temp/HomeAnnouncement";
import { Button } from "@/components/ui/button";
import { ACTION_SUFFIX } from "next/dist/lib/constants";
import { FiDownload } from "react-icons/fi";

const Test = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col xl:flex-row items-center justify-between 
        xl:pt-8 xl:pb-24"
        >
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl"> Full Stack Software Engineer </span>
            <span className="text-base italic text-primary  xl:text-lg">
              / aharoJ
            </span>
            <h1 className="h1">
              Angel Jair Haro <br />
            </h1>
            <p className="max-w-[500px] my-2 text-white/80">
              You are a function of what the whole universe is doing in the same
              way that a wave is a function of what the whole ocean is doing.
              <br />
              <span className="text-primary italic tracking-tight">
                Alan Watts
              </span>
            </p>

            {/* download CV Button */}
            <div className=" flex flex-col gap-8 xl:flex-row items-center">
               <Button 
                 variant="outline" 
                 size="lg" 
                 className="uppercase flex items-center gap-2" 
                 > 
                 <span> Download CV </span> 
                 <FiDownload className="text-xl" /> 
               </Button> 

              {/* Socials Button */}
              <div className="my-4 xl:my-4">
                <Social
                  containerStyles="flex space-x-4 lg:space-x-8 "
                  iconStyles="w-14 h-14 border border-primary rounded-full flex justify-center items-center text-xl
                    text-primary text-base hover:bg-primary/70 hover:text-black hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>


      <LandingStats />

      {/* <LandingDesktopProject /> */}
      {/* <LandingMobileProject /> */}

      {/* ANNOUNCEMENT */}
      <HomeAnnouncement />
    </section>
  );
};

export default Test;
