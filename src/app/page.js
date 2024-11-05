import Hero from "./landing_page/Hero";
import ConsultationForm from "./landing_page/ConsultationForm";
import About from "./landing_page/About";
import OurServices from "./landing_page/OurServices";
import SuccessSolutions from "./landing_page/SuccessSolutions";
import OurProjects from "./landing_page/OurProjects";
import Testimonials from "./landing_page/Testimonials";
import Achievements from "./landing_page/Achievements";
import BlogsSection from "./landing_page/BlogsSection";
import Contact from "./landing_page/Contact";
<<<<<<< Updated upstream
=======
import dynamic from "next/dynamic";
import TestimonialCarousel from "./components/TestimonialCarousel/testimonialCarousel";
import Task from "./landing_page/Task";
const ConsultationForm = dynamic(() =>
  import("./landing_page/ConsultationForm")
);
const OurProjects = dynamic(() => import("./landing_page/OurProjects"));
const Testimonials = dynamic(() => import("./landing_page/Testimonials"));

export const metadata = {
  title: "Welcome to Kakushin",
  description: "Your trusted partner for digital transformation.",
  other: {
    "application/ld+json": {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Kakushin",
      description: "Your trusted partner for digital transformation.",
      url: "https://kakushin.io/",
      mainEntity: {
        "@type": "Organization",
        name: "Kakushin",
        url: "https://kakushin.io",
        logo: "https://kakushin.io/logo.png",
        sameAs: [
          "https://www.linkedin.com/company/kakushin",
          "https://twitter.com/kakushin",
        ],
      },
    },
  },
};
>>>>>>> Stashed changes

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ConsultationForm />
      <About />
      <OurServices />
      <OurProjects />
      <SuccessSolutions />
      <Testimonials />
      <Achievements />
      <BlogsSection />
      <Contact />
      {/* <Task /> */}
    </div>
  );
}
