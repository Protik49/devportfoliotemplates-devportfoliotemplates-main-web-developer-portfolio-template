import React from "react";
import Image from "next/image";
//import { title } from "process";

export const ProjectsSection = () => {
  return (
    <section
      id="work"
      className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
          Featured Projects
        </h2>
        <div className="space-y-8 sm:space-y-12">
          {[
            {
              titleURL: "https://github.com/Protik49/GameBlast",
              title: "GameBlast",
              description:
                "Handpicked insights, trailers, and updates tailored for every gamer. Stay ahead of the curve.",
              metrics: {
                performance: 98,
                accessibility: 100,
                seo: 100,
              },
              techDetails: [
                "Tailwind CSS for responsive UI design",
                "React Router for client-side routing",

                "Framer Motion for animations",
                "API integration for fetching gaming news",
                "Responsive design with mobile-first approach",
                "Netlify deployment",
              ],
              image: "/project1.png",
            },
            {
              titleURL: "https://github.com/Protik49/Cost-of-Scroll",
              title: "Cost Of Scroll",
              description: "Track the carbon cost of your screen time.",
              metrics: {
                performance: 95,
                accessibility: 98,
                seo: 100,
              },
              techDetails: [
                "React + TypeScript for robust UI logic and type safety",
                "Tailwind CSS for clean, responsive styling",
                "Vite for fast development and optimized builds",
                "Client-side only (no backend)",
                "Estimate visualization of carbon emissions per screen time",
                "Deployed via Netlify",
              ],

              image: "/project2.png",
            },
          ].map((project) => (
            <div
              key={project.titleURL}
              className="bg-[#21262D] rounded-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 ">
                  <a
                    href={project.titleURL}
					target="_blank"
                    className="text-xl sm:text-2xl underline font-bold"
                  >
                    {project.title}
                  </a>
                  <p className="text-sm sm:text-base text-gray-400">
                    {project.description}
                  </p>

                  {/* Performance Metrics */}
                  <div className="space-y-3">
                    <h4 className="text-base sm:text-lg font-semibold">
                      Performance Metrics
                    </h4>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-blue-400">
                            {value}
                          </div>
                          <div className="text-sm text-gray-400 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Implementation */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                      Technical Implementation
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                      {project.techDetails.map((detail) => (
                        <li key={detail} className="flex items-center gap-2">
                          <span className="text-green-400">▹</span>
                          <span className="text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative h-full min-h-[300px] lg:min-h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
