// @app/casa/page.tsx
import Image from "next/image";

export default function CasaPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse items-center justify-between min-h-[92vh] py-12 gap-12">
          {/* Text Content */}
          <div className="flex-1">
            <div className="max-w-2xl">
              <div className="mb-1 text-lg text-primary font-mono tracking-wide">
                Software Engineer
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Angel Jair Haro
              </h1>

              <p className="text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
                Crafting performant solutions at the intersection of design and
                technology. Minimalist at heart, focused on creating
                frictionless experiences.
              </p>

              <div className="flex flex-col gap-4 mb-12">
                {/* <a */}
                {/*   href="/projects" */}
                {/*   className="bg-primary hover:bg-primary/90 text-black font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center" */}
                {/* > */}
                {/*   View Projects */}
                {/* </a> */}
                {/* <a */}
                {/*   href="/contact" */}
                {/*   className="border border-white/30 hover:border-white/60 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center" */}
                {/* > */}
                {/*   Get in Touch */}
                {/* </a> */}
              </div>

              <div className="flex gap-6">
                {[
                  { name: "GitHub", url: "https://github.com/aharoj" },
                  { name: "LinkedIn", url: "https://linkedin.com/in/aharoj" },
                  { name: "Twitter", url: "https://twitter.com/aharoj" },
                  { name: "Instagram", url: "https://instagram.com/aharoj" },
                  { name: "Discord", url: "https://twitter.com/aharoj" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors duration-200 text-lg"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Selfie */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-[280px] h-[280px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent transform rotate-12"></div>
              <Image
                src="/profile/z.png"
                alt="Angel Jair Haro"
                width={360}
                height={360}
                priority
                className="rounded-full object-cover w-full h-full relative z-10 border-4 border-white/5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
