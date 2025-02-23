import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  link: string;
}

export function ProjectCard({ img, title, desc, link }: ProjectCardProps) {
  return (
    <div className="card" data-aos="fade-up">
      <div className="mx-0 mt-0 mb-6 h-48 card-header">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-fit"
        />
      </div>
      <div className="p-0 card-body">
        <Link
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <h5 className="mb-2 text-2xl font-bold text-blue-gray-900">
            {title}
          </h5>
        </Link>
        <p className="mb-6 font-normal !text-gray-500 text-lg">
          {desc}
        </p>
        <Link
          href={link}
          target="_blank"
          className="bg-gray-900 text-white p-2 rounded px-4"
        >
          Visit Site
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
