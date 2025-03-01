import Photo from "@/components/Photo";
import Social from "@/components/Social";
import SkillNavigatorDesktop from "@/components/clean/skill-navigator/SkillNavigatorDesktop";
import LandingStatsDesktop from "@/modules/homes/LandingStatsDesktop";
import HomeAnnouncement from "@/components/temp/HomeAnnouncement";
import HomeGoToProjectsBtn from "@/modules/homes/HomeGoToProjectsBtn";
import SkillNavigatorMobile from "@/components/clean/skill-navigator/SkillNavigatorMobile";
import LandingStatsMobile from "@/modules/homes/LandingStatsMobile";
import SpecialFeatureProject from "@/components/clean/project/SpecialFeatureProject";

const Home = () => {
  return (
    <>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div
            className="flex flex-col xl:flex-row items-center justify-between 
        xl:pt-8 xl:pb-24"
          >
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl"> Software Engineer </span>
              <span className="text-base italic text-primary  xl:text-lg">
                {" "}
                / aharoJ{" "}
              </span>
              <h1 className="h1">
                Angel Jair Haro <br />
              </h1>
              <p className="max-w-[500px] my-2 lg:text-xl text-white/80">
                You are a function of what the whole universe is doing in the
                same way that a wave is a function of what the whole ocean is
                doing.
                <br />
                <span className="text-primary italic lg:text-xl tracking-tight">
                  Alan Watts
                </span>
              </p>

              <div className=" flex flex-col gap-8 xl:flex-row items-center">
                {/* Download CV Button
             <HomeDownloadCvBtn/> */}
                {/* Go to Projects Button */}
                <HomeGoToProjectsBtn />

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
      </section>

      <section title="ANIMATED STATS">
        <div className="hidden lg:block">
          <LandingStatsDesktop />
        </div>
        <div className="block lg:hidden">
          <LandingStatsMobile />
        </div>
      </section>

      <section title="SKILL NAVIGATOR">
        <div className="hidden lg:block">
          <SkillNavigatorDesktop />
        </div>
        <div className="block lg:hidden">
          <SkillNavigatorMobile />
        </div>
      </section>

      <section title="FEATURED PROJECT">
        <div className="hidden lg:block">
          <SpecialFeatureProject />
        </div>
        <div className="block lg:hidden">
          {/* HERE WE HAVE TO MAKE MOBILE VERSION */}
        </div>

      </section>

      <section title="FEATURED PROJECT" className="py-12">
        <div className="">{/* <ChatProject/> */}</div>
      </section>

      {/* ANNOUNCEMENT */}
      <HomeAnnouncement />
    </>
  );
};

export default Home;
