import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#F8F9FC] text-[#1E293B] flex flex-col items-center justify-center px-6 py-16"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-8 text-[#1E293B]">About Me.</h2>

      {/* About Paragraph */}
      <div className="max-w-3xl text-center mb-12">
        <p className="text-lg leading-relaxed mb-3">
          I’m a passionate developer who enjoys creating impactful solutions through web development and machine learning. I love building responsive, visually appealing web applications and intelligent, data-driven models that solve real-world problems.
        </p>
        <p className="text-lg leading-relaxed mb-3">
        My programming journey began in college, where curiosity quickly turned into late-night coding sessions. Today, I love creating things that make technology smarter and life a little easier.
        </p>
       
        
      </div>

      {/* Education Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Class 10 */}
        <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-[#232C4D]">
            Class 10th
          </h3>
          <p className="text-gray-600">Scottish Public School Katihar, Bihar</p>
          <p className="text-gray-500">2012 - 2019</p>
          <p className="text-[#FCD34D] font-medium mt-2">Grade: 88%</p>
        </div>

        {/* Class 12 */}
        <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-[#232C4D]">
            Class 12th
          </h3>
          <p className="text-gray-600">Holy Cross School Madhepura, Bihar</p>
          <p className="text-gray-500">2019 - 2021</p>
          <p className="text-[#FCD34D] font-medium mt-2">Grade: 80%</p>
        </div>

        {/* Graduation */}
        <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-[#232C4D]">
            Graduation
          </h3>
          <p className="text-gray-600">Birla Institute of Technology, Mesra</p>
          <p className="text-gray-500">2022 - 2026</p>
          <p className="text-[#FCD34D] font-medium mt-2">CGPA: 7.6 <p classNane="text-color grey"> till 6th sem</p></p>
        </div>
      </div>
    </section>
  );
};

export default About;
