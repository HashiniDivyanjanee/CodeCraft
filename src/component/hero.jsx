import React from "react";
import heroImg from "../assets/2.png";
import { div } from "framer-motion/client";
const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#171717] text-white flex items-center pt-28 md:h-screen"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-hidden gap-12 h-full">
        {/* left side */}
        <div className="md:w-1/2">
          <h1>Code Craft Innovations</h1>
          <p></p>
        </div>

        {/* right side */}
        <div className="md:w-1/2 h-full">
        <img src={heroImg} alt="hero image" className="w-full object-cover" />
        </div>
      </div>
    </section>
  );
};


export default Hero;
