import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaStackOverflow } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="bg-black text-gray-300 min-h-screen flex flex-col items-center p-10">
      {/* Navigation Bar */}
      <nav className="w-full flex justify-end space-x-8 p-4 text-gray-400 text-lg">
        <a href="#home" className="hover:text-white">Home</a>
        <a href="#experience" className="hover:text-white">Experience</a>
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </nav>
      
      {/* Sidebar Social Icons */}
      <div className="fixed left-5 top-1/3 flex flex-col space-y-4 text-gray-400 text-2xl">
        <FaGithub className="hover:text-white cursor-pointer" />
        <FaLinkedin className="hover:text-white cursor-pointer" />
        <FaTwitter className="hover:text-white cursor-pointer" />
        <FaInstagram className="hover:text-white cursor-pointer" />
        <FaStackOverflow className="hover:text-white cursor-pointer" />
      </div>

      {/* Hero Section */}
      <div className="text-center mt-20">
        <p className="text-green-400 text-lg">Hi, my name is</p>
        <h1 className="text-6xl font-bold text-gray-200">[Your Name]</h1>
        <h2 className="text-4xl font-semibold text-gray-400 mt-2">Building the web, better.</h2>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Innovating the web with purpose and precision. As a full-stack engineer,
          I create accessible, user-friendly digital experiences that leave a lasting impact.
        </p>
        <button className="mt-6 px-6 py-2 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all rounded-lg">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
