import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

import About from "./sections/About";
import Hero from "./sections/Hero";
import WhyUs from "./sections/WhyUs";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";

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
      <Hero />
      <About />
      <WhyUs />
      <Experience />
      <Testimonials />
    </ReactLenis>
  );
};

export default App;
