import OurStorySection from "./landing_page/NewHero";
import Achievements from "./landing_page/Achievements";
import BlogsSection from "./landing_page/BlogsSection";
import dynamic from "next/dynamic";
import OurProjects from "./landing_page/OurProjects";
import { Testimonial } from "./landing_page/NewTestimonials";
import AboutUs from "./landing_page/NewAboutUs";
import ContactForm from "./landing_page/NewContact";
import ServicesSection from "./landing_page/NewOurServices";

const ConsultationForm = dynamic(() =>
  import("./landing_page/ConsultationForm")
);

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

export default function Home() {
  return (
    <div className="space-y-0">
      <OurStorySection />
      <AboutUs />
      {/* <ServicesSection /> */}
      <ConsultationForm />
      <OurProjects />
      <Testimonial />
      {/* <Achievements /> */}
      <BlogsSection />
      <ContactForm />
    </div>
  );
}
