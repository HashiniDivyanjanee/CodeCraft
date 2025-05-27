import { div } from "framer-motion/client";
import React from "react";
import { BsChatQuote } from "react-icons/bs";
import review1 from "../assets/review1.jpg";
import review2 from "../assets/review2.jpg";

const testimonials = [
  {
    name: "John Doe",
    location: "Colombo",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    image: review1,
  },
  {
    name: "Kevin Doe",
    location: "Colombo",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    image: review2,
  },
];

const Testimonial = () => {
  return (
    <div className="bg-[#f7f8fc] py-12" id="testimonial">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4x1 font-bold mb-3">What Our Clients Say</h2>
          <p className="text-lg mb-12 md:w-1/2 mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas illum
            ducimus porro maiores adipisci enim rerum incidunt perspiciatis.
          </p>
        </div>
        <div className="flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg p-6 flex-1"
            >
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                <BsChatQuote className="size-12 text-yellow-500" />
              </div>
              <div className="flex flex-col space-y-3 mb-4">
                <p className="text-lg mb-2">{testimonial.review}</p>
                <div className="flex gap-1">
                  <img
                    src={testimonial.image}
                    alt="reviwer image"
                    className="size-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="font-semibold">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
