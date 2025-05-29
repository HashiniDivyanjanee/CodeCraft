import { div } from "framer-motion/client";
import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import footerLogo from "../assets/logo.png"
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="py-12 bg-gray-100 px-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8">
                <div className="space-y-6 mr-14">
                    <div className="flex items-center space-x-2">
                        <img src={footerLogo} alt="" className="w-12 h-12" />
                    </div>
                    <p className="text-black">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid culpa itaque autem quos nobis error unde magnam fugiat iusto cum.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="bg-gray-200 text-yellow-500 rounded-full size-10 flex items-center justify-center hover:bg-yellow-500 hover:text-white">
                            <FaFacebook className="text-xl" />
                        </a>
                        <a href="#" className="bg-gray-200 text-yellow-500 rounded-full size-10 flex items-center justify-center hover:bg-yellow-500 hover:text-white">
                            <FaTwitter className="text-xl" />
                        </a>
                        <a href="#" className="bg-gray-200 text-yellow-500 rounded-full size-10 flex items-center justify-center hover:bg-yellow-500 hover:text-white">
                            <FaInstagram className="text-xl" />
                        </a>
                        <a href="#" className="bg-gray-200 text-yellow-500 rounded-full size-10 flex items-center justify-center hover:bg-yellow-500 hover:text-white">
                            <FaLinkedin className="text-xl" />
                        </a>
                    </div>
                </div>
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-3">
                        <li><a href="#home" className="hover:underline text-gray-700">Home</a></li>
                        <li><a href="#about" className="hover:underline text-gray-700">About US</a></li>
                        <li><a href="#service" className="hover:underline text-gray-700">Services</a></li>
                        <li><a href="#contact" className="hover:underline text-gray-700">Contact Us</a></li>
                    </ul>
                </div>
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4">Support</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="hover:underline text-gray-700">FAQ</a></li>
                        <li><a href="#" className="hover:underline text-gray-700">Terms of Service</a></li>
                        <li><a href="#" className="hover:underline text-gray-700">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline text-gray-700">Support Center</a></li>
                    </ul>
                </div>
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4">Support</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-yellow-500" />
                            <p className="text-gray-700">Gampaha, Sri Lanka.</p>
                        </li>
                        <li className="flex items-center gap-2"><FaPhoneAlt className="text-yellow-500" />
                            <p className="text-gray-700">+94 77 210 93 12</p>
                        </li>
                        <li className="flex items-center gap-2"><FaEnvelope className="text-yellow-500" />
                            <p className="text-gray-700">codecraftsinnovation@gmail.com</p>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer;