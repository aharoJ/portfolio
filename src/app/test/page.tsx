// path: src/app/test/page.tsx

import EducationDesktop from "@/modules/claude/component/EducationDesktop";
import EducationMobile from "@/modules/claude/component/EducationMobile";

export default function TestingAboutPage() {
  return (
    <>
      {/* -------------------- Education Section -------------------- */}
      <section title="EDUCATION">
        <div className="hidden lg:block">
          <EducationDesktop />
        </div>
        <div className="block lg:hidden">
          <EducationMobile />
        </div>
      </section>
      {/* --- --- --- --- ... .... ... --- --- --- --- */}

      {/* -------------------- Education Section -------------------- */}
      {/* <section title="EDUCATION"> */}
      {/*   <div className="hidden lg:block"> */}
      {/*     <TestingggEducationDesktop /> */}
      {/*   </div> */}
      {/*   <div className="block lg:hidden"> */}
      {/*     <EducationMobile /> */}
      {/*   </div> */}
      {/* </section> */}
      {/* --- --- --- --- ... .... ... --- --- --- --- */}
    </>
  );
}
