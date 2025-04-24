import React from "react";
import heroImg from "../assets/2.png";
import { div } from "framer-motion/client";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#171717] text-white flex items-center pt-28 md:h-screen"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-hidden gap-12 h-full">
        {/* left side */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug">
            CodeCraft Innovations
          </h1>
          <p className="text-1xl mb-12 md:pr-8">
            Video provides a powerful way to help you prove your point. When you
            click Online Video, you can paste in the embed code for the video
            you want to add. You can also type a keyword to search online for
            the video that best fits your document.
          </p>
          <button className="bg-[#E9A319] text-white py-3.5 px-8 font-medium rounded-md hover:bg-[#E9A319]/80">
            <a href="#contact" className="flex gap-1 items-center">
              <span>Get Started</span> <IoArrowForwardCircleSharp />
            </a>
          </button>
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
