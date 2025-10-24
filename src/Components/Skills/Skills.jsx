import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[rgb(35,44,77)] text-gray-200 flex flex-col items-center justify-center px-6 py-16"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-12 text-[#FCD34D]">My Skills.</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Technical Skills */}
        <div className="bg-[rgb(44,54,92)] p-8 rounded-2xl shadow-lg border border-gray-700 hover:shadow-yellow-200/20 transition">
          <h3 className="text-2xl font-semibold mb-4 text-[#FCD34D]">
            Technical Skills
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>• C / C++</li>
            <li>• Python</li>
            <li>• Data Structures & Algorithms</li>
            <li>• Object-Oriented Programming (OOP)</li>
            <li>• SQL & Database Management</li>
          </ul>
        </div>

        {/* Web Development Skills */}
        <div className="bg-[rgb(44,54,92)] p-8 rounded-2xl shadow-lg border border-gray-700 hover:shadow-yellow-200/20 transition">
          <h3 className="text-2xl font-semibold mb-4 text-[#FCD34D]">
            Web Development
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>• HTML, CSS, JavaScript</li>
            {/* <li>• React.js</li> */}
            <li>• Tailwind CSS</li>
            <li>• ReactJs, MongoDb, ExpressJs, NodeJs</li>
            <li>• RESTful APIs</li>
          </ul>
        </div>

        {/* Machine Learning & Analytics Skills */}
        <div className="bg-[rgb(44,54,92)] p-8 rounded-2xl shadow-lg border border-gray-700 hover:shadow-yellow-200/20 transition">
          <h3 className="text-2xl font-semibold mb-4 text-[#FCD34D]">
            ML & Analytics
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Data Preprocessing & Feature Engineering</li>
            <li>• Scikit-Learn, Pandas, NumPy</li>
            <li>• Matplotlib & Seaborn</li>
            <li>• Regression, Classification, Clustering</li>
            <li>• Exploratory Data Analysis (EDA)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
