"use client";

import { ProjectCard } from "@/components";
import Heading from "@/components/heading";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/blog-1.png",
    title: "Morningwale",
    desc: "Developed a grocery delivery platform with a React Native mobile app and a React.js web interface.",
    link: "https://www.morningwale.in",
  },
  {
    img: "/image/blog-2.png",
    title: "SignalHRM",
    desc: "Developed SignalHRM, an HR management platform clock-in/clockout system and advanced time tracking.",
    link: "https://signalhrm.com/",
  },
  {
    img: "/image/blog-3.png",
    title: "Equity Corps Of Oregon",
    desc: "Created accessible web interfaces using React.js and Next.js,implementing secure authentication mechanisms.",
    link: "https://equitycorps.org/",
  },
  {
    img: "/image/blog-4.png",
    title: "Imagdent",
    desc: "Developed a dental services platform with a responsive appointment booking system using React.js class components.",
    link: "https://www.imagdent.com/",
  },
  {
    img: "/image/blog-5.png",
    title: "Seeding Justice",
    desc: "Built responsive user interfaces for a donor platform using React.js, with integrated HelloSign API for digital signatures.",
    link: "https://dmf.seedingjustice.org/",
  },
  {
    img: "/image/blog-6.png",
    title: "President's Alliance",
    desc: "Built a performance-optimized immigration services platform using React.js, Next.js, and SSR and improved SEO rankings.",
    link: "https://www.presidentsalliance.org/",
  },
];

export function Projects() {
  return (
    <section className="py-8 px-8" id="projects">
      <div className="container mx-auto mb-20 text-center">
        <Heading title="Projects" />
        <h5
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12 text-lg"
        >
          From building seamless mobile apps to crafting engaging websites, I
          bring ideas to life with clean, efficient, and user-friendly designs.
        </h5>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
