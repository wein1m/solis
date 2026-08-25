import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

import About from "./sections/About";
import Hero from "./sections/Hero";
import WhyUs from "./sections/WhyUs";

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
    </ReactLenis>
  );
};

export default App;
