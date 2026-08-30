import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const About = () => {
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
      <Footer />
    </ReactLenis>
  );
};

export default About;
