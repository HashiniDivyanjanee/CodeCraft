import { div, li } from "framer-motion/m";
import React from "react";

const packages = [
  {
    name: "Basic",
    price: "19",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit.",
    features: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
      "Quis nostrud exercitation ullamco",
    ],
  },
  {
    name: "Standard",
    price: "49",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit.",
    features: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
      "Quis nostrud exercitation ullamco",
    ],
  },
  {
    name: "Premium",
    price: "99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit.",
    features: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
      "Quis nostrud exercitation ullamco",
    ],
  },
];

const Pricing = () => {

  const handleScrollToContact =() =>{
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div id="pricing" className="bg-[#f7f8fc] pt-32">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">
            Perfect for Small & Large Brands
          </h2>
          <p className="text-lg mb-12 md:w-2/3 mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            facilis perspiciatis unde ipsam? Velit corrupti aut et eum commodi
            omnis.
          </p>
        </div>
        {/* Packages */}
        <div className="flex flex-col md:w-5/6 mx-auto md:flex-row gap-8 pb-18">
          {
            packages.map((pkg, index)=>(
              <div key={index} className="bg-white rounded-lg p-6 flex-1 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{pkg.name}</h3>
                <hr className="w-24 border text-yellow-500 border-primary"/>
                <p className="text-3xl font-bold mb-4">{pkg.price}<span className="text-lg font-normal">/mo</span></p>
                <p className="text-lg mb-4">{pkg.description}</p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  {
                    pkg.features.map((features,idx)=>(
                      <li key={idx}>{features}</li>

                    ))
                  }
                </ul>
                <button onClick={handleScrollToContact} className="bg-yellow-500 text-white px-4 py-2 rounded">Get Started</button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Pricing;
