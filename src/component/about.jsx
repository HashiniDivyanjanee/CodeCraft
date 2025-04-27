import React, { useState } from "react";
import thumnailImg from "../assets/service2.jpg";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

const About = () => {
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // const handleVideoPaly = () => {
  //   setIsVideoPlaying(true);
  // };
  // const handleVideoPause = () => {
  //   setIsVideoPlaying(false);
  // };

  return (
    <div id="about" className="bg-[#f7f8fc] pb-16 pt-20">
      <div className="container mx-auto">
        <div className="py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* left Side */}
          <div className="md:w-1/2 w-full md-8 md:mb-0">
           
              <div>
                <img
                  src={thumnailImg}
                  alt="video thumnail"
                  className="w-full md:h-[446px] h-auto rounded-lg object-cover"
                />
              </div>
           
          </div>
          {/* right Side */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-4xl capitalize font-secondary font-bold mb-4 leading-snug">
              CodeCraft Innovations
            </h2>
            <p className="text-1xl mb-12 md:pr-8">
              Video provides a powerful way to help you prove your point. When
              you click Online Video, you can paste in the embed code for the
              video you want to add. You can also type a keyword to search
              online for the video that best fits your document.
            </p>
            <button className="bg-[#E9A319] text-white py-3.5 px-8 font-medium rounded-md hover:bg-[#E9A319]/80">
              <a href="#contact" className="flex gap-1 items-center">
                <span>Get Started</span> <IoArrowForwardCircleSharp />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
