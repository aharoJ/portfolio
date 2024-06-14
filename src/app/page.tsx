import React from "react";
import Head from "next/head";
import TransitionEffect from "../components/TransitionEffect";
import Layout from "./layout";
// import Layout from '../components/Layout';
import HorizantalSelfie from "@/components/selfie/HorizantalSelfie";
import TextAnimation from "@/components/animation/TextAnimation";
import ResumeContactButton from "../components/ResumeContactButton";
import AnimatedStats from "../components/AnimatedStats";
import LandingProject from "../components/LandingProject";
import WrapperLandingProject from "../components/WrapperLandingProject";

const Home: React.FC = () => {
  const alan = `Until you make the unconscious conscious, it will direct your life and you will call it fate. You are a function of what the whole universe is doing in the same way that a wave is a function of what the whole ocean is doing. ~ Alan Watts`;

  return (
    <>
      <Head>
        <title>aharoJ | Home</title>
        <meta name="description" content="Created by aharoJ" />
      </Head>
      <TransitionEffect />

      <main className="flex min-h-screen w-full items-center text-dark dark:text-light">
        <Layout className="">
          {/* Selfie | Name | Summary | Buttons */}
          <div className="flex w-full md:flex-col md:items-center md:justify-center">
            <div className="w-[37%] md:w-[100%]">
              <HorizantalSelfie />
            </div>
            <div className="flex w-[63%] flex-col items-center self-center md:w-full">
              <TextAnimation
                text="Angel J. Haro"
                className="mb-2 justify-center text-9xl font-light tracking-wider text-gray-400 
                dark:text-orange-200 md:mb-4 md:flex-wrap md:text-6xl md:font-light "
              />
              <div className="flex w-[90%] items-center self-center md:mb-0 md:flex-wrap">
                <p className="text-3xl font-normal md:font-light md:text-xl md:w-full">
                  {alan}{" "}
                </p>
              </div>
              <div className="my-4 flex w-[50%] md:w-[100%] md:my-12">
                <ResumeContactButton />
              </div>
            </div>
          </div>

          {/* React Icons */}
          <div className="container-for-stats">
            <AnimatedStats />
          </div>

          {/* LANDING PROJECT */}
          <div className="landingproject-desktop md:hidden">
            <LandingProject />
          </div>
          <div className="landingproject-iPhone hidden md:block">
            <WrapperLandingProject />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Home;
