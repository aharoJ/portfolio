import React from 'react'

const HomeAnnouncement = () => {
  return (
    <div className="container mx-auto h-full my-12">
      <h2 className="h2 justify-center flex "> NOTICE </h2>
      <span className="text-green-300 text-3xl">Announcement: 01.14.2025</span>

      <p>
        • Currently <span className="text-red-400"> refactoring </span>
        the old codebase from{" "}
        <span className="text-white/80"> JavaScript </span>
        to <span className="text-blue-200 "> TypeScript </span>
        and updating to the newest Next framework available for LTS from
        <span className="text-white/80"> Next.js 12 </span>
        to <span className="text-blue-200"> Next.js 14 </span>.
      </p>
      <p className="text-white ">
        • You can view my original codebase on{" "}
        <a
          href="https://github.com/aharoJ/portfolio"
          className="text-blue-400 hover:text-blue-300 font-bold underline"
        >
          GitHub
        </a>
        .
      </p>
      

      <p> • Updating descriptions in Home, About, Contact. </p>
      <p> • Updating titles in Home, About, Contact.</p>
      <p> • Updating dates in Home, About, Contact.</p>
      <p> • Updating mobile view in Home, About, Contact.</p>
      <p> • Updating size for both mobile and desktop in Home, About, Contact.</p>
      <p> • Updating animation smoothness on mobile and tablet devices in Home, About, Contact.</p>
      <p> • Updating padding for all devices in Home, About, Contact.</p>
    </div>
  );
}

export default HomeAnnouncement
