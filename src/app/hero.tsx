"use client";

import Image from "next/image";
import { Input, Button, Typography, Spinner } from "@material-tailwind/react";
import { AiOutlineHtml5, AiOutlineJavaScript } from "react-icons/ai";
import { FaCss3, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { useRef, useState } from "react";
import common from "@/utils/common";
import { toast } from "react-toastify";
import Loader from "@/components/loader";

function Hero() {
  const [requestEmail, setRequestEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const imageRef = useRef<HTMLImageElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    if (imageRef.current) {
      const { left, top, width, height } =
        imageRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const offsetX = ((event.clientX - centerX) / width) * 50;
      const offsetY = ((event.clientY - centerY) / height) * -50;

      setTilt({ x: offsetX, y: offsetY });
    }
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const sendRequestEmail = async () => {
    setLoading(true);
    if (common.isValidEmail(requestEmail)) {
      try {
        const apiUrl = common.apiPath("request-offers/save");
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: requestEmail }),
        });
        const data = await response.json();
        if (!data.error) {
          setRequestEmail("");
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    } else {
      setError("Please enter a valid email address.");
      toast.error("Please enter a valid email address.");
      setLoading(false);
    }
  };

  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <h1
            data-aos="fade-right"
            data-aos-delay="200"
            color="blue-gray"
            className="mb-4 lg:text-3xl !leading-tight text-3xl font-bold text-blue-gray-900"
          >
            Welcome to my Web <br /> Development Portofolio!
          </h1>
          <h5
            data-aos="fade-right"
            data-aos-delay="400"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28 text-lg"
          >
            I am Anurag Sinha, a dedicated web developer based in the Bharat,
            specializing in building innovative digital experiences. With a
            strong focus on Next.js, Prisma, and MySQL, I blend creativity with
            functionality to craft intelligent and dynamic web solutions.
          </h5>
          <div className="grid" data-aos="fade-right" data-aos-delay="600">
            <p className="mb-2 text-blue-gray-900 font-medium">Your email</p>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input
                color="gray"
                required
                label="Enter your email"
                size="lg"
                type="email"
                error={error !== ""}
                value={requestEmail}
                onChange={(e) => setRequestEmail(e.target.value)}
              />
              {/* {error && <p className="text-red-500 text-xs">{error}</p>} */}
              <button
                // className="w-full pl-4 md:w-[14rem] flex"
                className="flex items-center justify-center w-full md:w-[15rem] rounded-md border border-gray/50 bg-gray-900 px-6 py-3 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
                onClick={sendRequestEmail}
              >
                {loading && <Loader />}
                Require Offer
              </button>
            </div>
          </div>
          {/* <Typography variant="small" className="font-normal !text-gray-500">
            Read my{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </Typography> */}
        </div>
        <div
          ref={imageRef}
          className="relative flex justify-center mt-1"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          {/* Center Image */}
          <Image
            width={224}
            height={224}
            src="/image/hero.jpg"
            alt="team work"
            className="h-[17rem] w-[17rem] rounded-full object-fit border-4 border-white shadow-lg"
          />

          {/* Rotating Icons Container */}
          <div className="group absolute inset-0 flex items-center justify-center">
            <div className="circular-container spin-slow">
              <AiOutlineJavaScript className="icon text-yellow-900" />
              <FaReact className="icon text-blue-500" />
              <TbBrandNextjs className="icon text-black" />
              <AiOutlineHtml5 className="icon text-pink-500" />
              {/* <IoLogoCss3  className="icon text-green-500" size={15} /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
