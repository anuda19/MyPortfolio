"use client";

import React from "react";
import Image from "next/image";
import Heading from "@/components/heading";

export function Testimonial() {
  const [active, setActive] = React.useState(3);

  return (
    <section className="py-12 px-8 lg:py-24" id="testimonials">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-10 text-center">
          <Heading title="Testimonials" />
          <p className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12">
            Discover what clients have to say about their experiences working
            with me. My client&apos;s satisfaction is my greatest achievement!
          </p>
        </div>
        <div className="card py-8 lg:flex-row">
          <div className="w-full lg:gap-10 h-full lg:!flex justify-between card-body">
            <div className="w-full mb-10 lg:mb-0" data-aos="fade-right">
              <h3 className="mb-4 font-bold lg:max-w-xs text-blue-gray-900 text-2xl">
                Web App Development
              </h3>
              <p className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500 text-lg">
                I had the pleasure of working with Anurag on a critical web
                development project, and I can confidently say that their
                expertise and professionalism exceeded my expectations.
              </p>
              <h6 className="mb-5 font-bold text-blue-gray-900">
                Michael - Technical Manager
              </h6>
              <div className="flex items-center gap-4">
                <Image
                  src="/image/avatar1.jpg"
                  alt="spotify"
                  width={40}
                  height={40}     
                  className={`cursor-pointer ${
                    active === 1 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(1)}
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
                <Image
                  src="/image/avatar2.jpg"
                  alt="spotify"
                  width={40}
                  height={40}
                  className={`cursor-pointer ${
                    active === 2 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(2)}
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100" />
                <Image
                  width={40}
                  height={40}
                  src="/image/avatar3.jpg"
                  alt="spotify"
                  className={`cursor-pointer ${
                    active === 3 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(3)}
                />
              </div>
            </div>
            <div
              className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0"
              data-aos="fade-left"
            >
              <Image
                width={768}
                height={768}
                alt="testimonial image"
                src={`/image/avatar${active}.jpg`}
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
