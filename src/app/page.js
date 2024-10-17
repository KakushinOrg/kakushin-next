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
      <Contact/>
    </div>
  );
}
