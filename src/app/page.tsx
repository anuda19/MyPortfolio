// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";
import { ToastContainer } from "react-toastify";
import "aos/dist/aos.css";
import AOSProvider from "./context/AOSProvider";

export default function Portfolio() {
  return (
    <AOSProvider>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Resume />
      <Testimonial />
      <ContactForm />
      <Footer />
      <ToastContainer />
    </AOSProvider>
  );
}
