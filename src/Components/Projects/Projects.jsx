import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction",
      description:
        "A machine learning model that predicts whether a customer will stop using a service based on behavioral patterns and usage data.",
      technologies: ["Python","Numpy", "Pandas", "Scikit-Learn", "Matplotlib"],
      buttons: [
        {
          label: "GitHub",
          link: "https://github.com/Shreshth109/Customer-Churn-Prediction-using-ML",
        },
      ],
    },
    {
      title: "AI Chatbot",
      description:
        "An intelligent chatbot built using the MERN stack and OpenAI API for natural and human-like conversations.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "OpenAI API"],
      buttons: [
        {
          label: "GitHub",
          link: "https://github.com/Shreshth109/MERN-OpenAI-Chatbot-v2",
        },
        {
          label: "Live Link",
          link: "https://mern-openai-chatbot-v2-frontend2.onrender.com/",
        },
        {
          label: "Demo Video",
          link: "https://youtu.be/your-demo-video",
        },
      ],
    },
    {
      title: "AQI Forecasting",
      description:
        "A machine learning project to forecast Air Quality Index (AQI) using time-series analysis and predictive modeling techniques.",
      technologies: ["Python", "Pandas", "NumPy", "FB Prophet", "Matplotlib"],
      buttons: [
        {
          label: "GitHub",
          link: "https://github.com/Shreshth109/AQI-Forecasting-Prediction",
        },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#F8F9FC] text-[#1E293B] flex flex-col items-center justify-center px-6 py-16"
    >
      <h2 className="text-4xl font-bold mb-12 text-[#1E293B]">Projects.</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition border border-gray-200"
          >
            {/* Title */}
            <h3 className="text-2xl font-semibold mb-3 text-[#232C4D]">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-4">{project.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-500">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-100 px-3 py-1 rounded-full border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-4">
              {project.buttons.map((btn, i) => (
                <a
                  key={i}
                  href={btn.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-[#FCD34D] text-[#232C4D] font-medium rounded-md hover:brightness-110 transition"
                >
                  {btn.label} ›
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
