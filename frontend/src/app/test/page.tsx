import SkillOverview from "@/components/acerca/SkillOverview";
import Timeline from "@/components/acerca/Timeline";
import AboutAnnouncement from "@/components/temp/AboutAnnouncement";
import React from "react";

import Image from 'next/image'


const Test = () => {
  return (
    <>
      <div>
        <SkillOverview />
      </div>

      <div>
        <Timeline />
      </div>

      {/* <h1 className="flex container justify-center text-9xl"> DIVIDER </h1> */}
      <AboutAnnouncement />

      <div>
        <h1 className="text-9xl">LALA</h1>
        <table>
          <tbody>
            <tr>
              <td align="center" width="333">
                <Image
                  src="https://techstack-generator.vercel.app/java-icon.svg"
                  alt="Java icon"
                  width="65"
                  height="65"
                />
                <br />
                Java
              </td>
              <td align="center" width="333">
                <Image
                  src="https://techstack-generator.vercel.app/python-icon.svg"
                  alt="Python icon"
                  width="65"
                  height="65"
                />
                <br />
                Python
              </td>
              <td align="center" width="333">
                <Image
                  src="https://techstack-generator.vercel.app/js-icon.svg"
                  alt="JavaScript icon"
                  width="65"
                  height="65"
                />
                <br />
                JavaScript
              </td>
              <td align="center" width="333">
                <Image
                  src="https://techstack-generator.vercel.app/ts-icon.svg"
                  alt="TypeScript icon"
                  width="65"
                  height="65"
                />
                <br />
                TypeScript
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Test;
