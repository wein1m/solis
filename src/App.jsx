import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

import About from "./sections/About";
import Hero from "./sections/Hero";
import WhyUs from "./sections/WhyUs";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Prices from "./sections/Prices";
import NavBar from "./sections/NavBar";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";

const App = () => {
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

export default App;
