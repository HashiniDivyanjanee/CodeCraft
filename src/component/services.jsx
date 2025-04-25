import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";


const Services = () => {
  return (
    <div id="services" className="h-screen bg-white">
      <div className="pt-28 px-4 container mx-auto">
        <div className="text-center space-y-5">
          <h2 className="text-4xl font-bold text-heroBg">
            What can we do Together
          </h2>
          <p className="md:w-1/2 mx-auto">
            {" "}
            Video provides a powerful way to help you prove your point. When you
            click Online Video, you can paste in the embed code for the video
            you want to add. You can also type a keyword to search online for
            the video that best fits your document.
          </p>
        </div>

        {/* Service Category Section */}
        <div className="py-12 md:w-4/5 mx-auto">
          <Tabs>
            <TabList className="flex flex-wrap justify-between items-center md:gap-8 gap-4">
              <Tab>Web Development</Tab>
              <Tab>Mobile Development</Tab>
              <Tab>Custom Software</Tab>
              <Tab>Digital Marketing</Tab>
            </TabList>

            <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
