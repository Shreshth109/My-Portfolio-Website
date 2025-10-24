import React from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center bg-[rgb(35,44,77)] text-gray-300 px-6"
    >
      <div className="max-w-3xl mx-auto text-left">
        {/* Greeting */}
        <p className="text-lg text-gray-400 mb-2">Hi, I'm</p>

        {/* Name */}
        <h1 className="text-6xl md:text-6xl font-semibold text-white mb-2">
          Kumar Shreshth<span className="text-[#FCD34D]">.</span>
        </h1>

        {/* Dynamic Text */}
        <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-6">
          I’m{" "}
          <TypeAnimation
            sequence={[
              "a Civil Engineer",
              2000,
              "a Problem Solver",
              2000,
              "a Lifelong Learner",
              2000,
              "a Web Developer",
              2000,
              "Passionate about Machine Learning",
              2500,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-[#FCD34D]"
          />
        </h2>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed max-w-xl mb-8">
          A final-year student who loves turning ideas into code, hitting boundaries on the cricket field, and capturing stories through my lens.
        </p>

        {/* Button */}
        <a
          href="#projects"
          className="inline-block bg-[#FCD34D] text-[rgb(35,44,77)] px-6 py-3 rounded-md font-semibold hover:brightness-110 transition"
        >
          View My Work ›
        </a>
      </div>
    </section>
  );
};

export default Home;
