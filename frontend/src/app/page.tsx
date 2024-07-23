import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import LandingStats from "@/components/casa/LandingStats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
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
            <h1 className="h1">
              Angel Jair Haro <br />{" "}
              <h3 className="text-main justify-center text-center"> aharoJ </h3>
            </h1>
            <p className="max-w-[500px] my-2 text-white/80">
              I excel in backend developemnt and i am proficient in various
              programming languages and frameworks.
            </p>
            {/* btn and socials */}
            <div className=" flex flex-col gap-8 xl:flex-row items-center">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span> Download CV </span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
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
      {/* <Stats /> */}
      <LandingStats />
    </section>
  );
};

export default Home;
