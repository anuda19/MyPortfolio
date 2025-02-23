"use client";

import { Input, Textarea } from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import common from "@/utils/common";
import Heading from "@/components/heading";
import Loader from "@/components/loader";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const apiUrl = common.apiPath("contact/save");
      console.log("Fetching from:", apiUrl);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const result = await response.json();
      console.log(result);

      setData({
        first_name: "",
        last_name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-8 py-1" id="contact">
      <div className="container mx-auto mb-10 text-center">
        <Heading title="Contact Me" />
        <p className="mx-auto w-full lg:w-5/12 !text-gray-500 text-lg">
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </p>
      </div>
      <div>
        <div className="container mx-auto border border-gray/50 card">
          <div className="grid grid-cols-1 lg:grid-cols-7 md:gap-10 card-body">
            <div
              className="w-full col-span-3 rounded-lg h-full p-5 md:p-16 bg-gray-900"
              data-aos="fade-right"
            >
              <h4 className="mb-2 text-2xl font-bold text-white">
                Contact Information
              </h4>
              <p className="mx-auto mb-8 text-base !text-gray-500">
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <h6 className="mb-2 text-white font-bold">+91(843) 430 4475</h6>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <h6 className="mb-2 text-white font-bold">
                  anuragsinha120@gmail.com
                </h6>
              </div>
              <div className="flex mb-10 gap-5">
                <TicketIcon className="h-6 w-6 text-white" />
                <h6 className="mb-2 text-white font-bold">
                  Open Support Ticket
                </h6>
              </div>
              <div className="flex items-center gap-5 text-white">
                <Link
                  href="https://www.linkedin.com/in/anurag-sinha-0a6a41148/"
                  target="_blank"
                >
                  <FaLinkedin size={30} />
                </Link>
                <Link
                  href="https://x.com/AnuragS19533346?t=lbK-lialXzNVAJ0g866nSA&s=08"
                  target="_blank"
                >
                  <FaTwitterSquare size={30} />
                </Link>
                <Link href="https://github.com/anuda19" target="_blank">
                  <FaGithub size={30} />
                </Link>
                <Link
                  href="https://leetcode.com/u/anurag_sinha/"
                  target="_blank"
                >
                  <SiLeetcode size={30} />
                </Link>
              </div>
            </div>
            <div
              className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5"
              data-aos="fade-left"
            >
              <form action="#" onSubmit={handleFormSubmit}>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="First Name"
                    name="first_name"
                    placeholder="eg. Lucas"
                    value={data.first_name}
                    onChange={handleValueChange}
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    name="last_name"
                    value={data.last_name}
                    onChange={handleValueChange}
                    placeholder="eg. Jones"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  name="email"
                  value={data.email}
                  onChange={handleValueChange}
                  placeholder="eg. lucas@mail.com"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                {/* @ts-ignore */}
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message"
                  name="message"
                  placeholder="Type your message here..."
                  value={data.message}
                  onChange={handleTextAreaChange}
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <div className="w-full flex justify-end">
                  <button
                    type="submit"
                    className="w-full md:w-fit flex gap-2 items-center justify-center rounded-md border border-gray/50 bg-gray-900 px-6 py-3 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
                    color="gray"
                  >
                    {loading ? (
                      <Loader />
                    ) : (
                      <EnvelopeIcon className="h-4 w-4" />
                    )}
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
