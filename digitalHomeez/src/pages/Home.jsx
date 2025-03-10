import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import CaseStudies from "../components/CaseStudies";
import WorkWithUs from "../components/WorkWithUs";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <WorkWithUs />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
