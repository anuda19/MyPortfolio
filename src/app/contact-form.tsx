"use client";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
  Spinner,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import common from "@/utils/common";

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

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contact Us
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full p-5 md:p-16 bg-gray-900" data-aos="fade-right">
              <Typography variant="h4" color="white" className="mb-2">
                Contact Information
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                Fill up the form and our Team will get back to you within 24
                hours.
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  +91(843) 430 4475
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  anuragsinha120@gmail.com
                </Typography>
              </div>
              <div className="flex mb-10 gap-5">
                <TicketIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  Open Support Ticket
                </Typography>
              </div>
              <div className="flex items-center gap-5">
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-facebook text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-instagram text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-github text-lg" />
                </IconButton>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5" data-aos="fade-left">
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
                  <Button
                    type="submit"
                    className="w-full md:w-fit flex gap-2 items-center"
                    color="gray"
                    size="md"
                  >
                    {loading ? (
                      <Spinner className="h-4 w-4" />
                    ) : (
                      <EnvelopeIcon className="h-4 w-4" />
                    )}
                    Send message
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
