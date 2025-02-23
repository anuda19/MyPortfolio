"use client";

import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";
import Heading from "@/components/heading";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Self-Taught Frontend Developer",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Certified Web Developer ",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Frontend Framework Proficiency Certification",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24" id="resume">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1" data-aos="fade-right">
          <Heading title="My Resume" />
          <p className="mb-4 mt-3 w-9/12 font-normal !text-gray-500 text-lg">
            Highly skilled and creative Web Developer with 3+ years of
            experience in crafting visually stunning and functionally robust
            websites and web applications.
          </p>
          <button
            color="gray"
            className="flex items-center gap-2"
            onClick={() => window.open('/file/anurag.pdf', '_blank')}
          >
            view more
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
          </button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
