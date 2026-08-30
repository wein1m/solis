import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import About from "./sections/About";
import Hero from "./sections/Hero";
import WhyUs from "./sections/WhyUs";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Prices from "./sections/Prices";
import FAQ from "./sections/FAQ";

const Home = () => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        autoRaf: true,
        anchors: true,
      }}
    >
      <NavBar />
      <Hero />
      <About />
      <WhyUs />
      <Experience />
      <Testimonials />
      <Prices />
      <FAQ />
      <Footer />
    </ReactLenis>
  );
};

export default Home;
