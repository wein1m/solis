import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Intro from "./sections/Intro";

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
      <Intro />
      <Footer />
    </ReactLenis>
  );
};

export default About;
