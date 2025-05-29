import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import serviceImg1 from "../assets/service1.avif";
import serviceImg2 from "../assets/service2.jpg";
import serviceImg3 from "../assets/service3.jpg";
import serviceImg4 from "../assets/service4.jpg";
import { motion } from "framer-motion"
import { fadeIn } from "../utilis/animationVariants";

const Services = () => {
  return (
    <div id="services" className="h-full bg-[#f1f1f1]">
      <div className="pt-28 px-4 container mx-auto">
        <motion.div variants={fadeIn('up', 0.2)}
          initial="hidden" whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }} className="text-center space-y-5">
          <h2 className="text-4xl font-bold text-heroBg">Services</h2>
          <p className="md:w-1/2 mx-auto">
            Video provides a powerful way to help you prove your point. When you
            click Online Video, you can paste in the embed code for the video
            you want to add. You can also type a keyword to search online for
            the video that best fits your document.
          </p>
        </motion.div>

        {/* Service Category Section */}
        <div className="py-12 md:w-4/5 mx-auto">
          <Tabs>
            <motion.TabList variants={fadeIn('up', 0.3)}
              initial="hidden" whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }} className="flex flex-wrap justify-between items-center md:gap-8 gap-4">
              <Tab>Web Development</Tab>
              <Tab>Mobile Development</Tab>
              <Tab>Custom Software</Tab>
              <Tab>Digital Marketing</Tab>
            </motion.TabList>

            <TabPanel>
              <motion.div variants={fadeIn('up', 0.2)}
                initial="hidden" whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }} className="flex flex-col md:flex-row gap-8 mt-8">
                {/* Left side (text) */}
                <div className="md:w-1/2 bg-white rounded-lg p-12">
                  <h3 className="text-3xl font-semibold text-yellow-500 mb-4">
                    Web Development
                  </h3>
                  <p className="mb-8">
                    Video provides a powerful way to help you prove your point.
                    When you click Online Video, you can paste in the embed code
                    for the video you want to add. You can also type a keyword
                    to search online for the video that best fits your document.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">Benefits</h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                  </ul>
                </div>

                {/* Right side (image) */}
                <div className="md:w-1/2">
                  <img
                    src={serviceImg1}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div variants={fadeIn('up', 0.2)} 
        initial="hidden" whileInView={"show"} 
        viewport={{ once: false, amount: 0.7 }}  className="flex flex-col md:flex-row gap-8 mt-8">
                {/* Left side (text) */}
                <div className="md:w-1/2 bg-white rounded-lg p-12">
                  <h3 className="text-3xl font-semibold text-yellow-500 mb-4">
                    App Development
                  </h3>
                  <p className="mb-8">
                    Video provides a powerful way to help you prove your point.
                    When you click Online Video, you can paste in the embed code
                    for the video you want to add. You can also type a keyword
                    to search online for the video that best fits your document.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">Benefits</h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                  </ul>
                </div>

                {/* Right side (image) */}
                <div className="md:w-1/2">
                  <img
                    src={serviceImg2}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div variants={fadeIn('up', 0.2)} 
        initial="hidden" whileInView={"show"} 
        viewport={{ once: false, amount: 0.7 }}  className="flex flex-col md:flex-row gap-8 mt-8">
                {/* Left side (text) */}
                <div className="md:w-1/2 bg-white rounded-lg p-12">
                  <h3 className="text-3xl font-semibold text-yellow-500 mb-4">
                    Custom Software
                  </h3>
                  <p className="mb-8">
                    Video provides a powerful way to help you prove your point.
                    When you click Online Video, you can paste in the embed code
                    for the video you want to add. You can also type a keyword
                    to search online for the video that best fits your document.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">Benefits</h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                  </ul>
                </div>

                {/* Right side (image) */}
                <div className="md:w-1/2">
                  <img
                    src={serviceImg3}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div variants={fadeIn('up', 0.2)} 
        initial="hidden" whileInView={"show"} 
        viewport={{ once: false, amount: 0.7 }}  className="flex flex-col md:flex-row gap-8 mt-8">
                {/* Left side (text) */}
                <div className="md:w-1/2 bg-white rounded-lg p-12">
                  <h3 className="text-3xl font-semibold text-yellow-500 mb-4">
                    Digital Marketing
                  </h3>
                  <p className="mb-8">
                    Video provides a powerful way to help you prove your point.
                    When you click Online Video, you can paste in the embed code
                    for the video you want to add. You can also type a keyword
                    to search online for the video that best fits your document.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">Benefits</h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                  </ul>
                </div>

                {/* Right side (image) */}
                <div className="md:w-1/2">
                  <img
                    src={serviceImg4}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
