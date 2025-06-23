import React from "react";

const jobs = [
  { title: "Frontend Developer", desc: "React, Tailwind, UX/UI", icon: "💻" },
  { title: "Backend Developer", desc: "Flask, REST APIs, Databases", icon: "🗄️" },
  { title: "Designer", desc: "Figma, Branding, Animation", icon: "🎨" },
];

const Careers = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 sm:py-12 px-2 sm:px-0">
      <div className="flex flex-col items-center mb-6 sm:mb-8">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png" alt="Careers" className="h-12 w-12 sm:h-20 sm:w-20 mb-2 sm:mb-4" />
        <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 text-blue-700">Join Our Team</h2>
        <p className="text-gray-600 text-center max-w-xl text-sm sm:text-base">We're always looking for talented people to join our growing team. Check out our open positions below!</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {jobs.map((job, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <div className="text-2xl sm:text-4xl mb-1 sm:mb-2">{job.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-blue-600">{job.title}</h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">{job.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers; 