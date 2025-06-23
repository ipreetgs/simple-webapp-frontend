import React from "react";

const About = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-8 mt-8 sm:mt-12 text-center border border-gray-100">
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Team" className="h-12 w-12 sm:h-20 sm:w-20 mx-auto mb-2 sm:mb-4" />
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-blue-700">About Us</h2>
      <p className="text-gray-700 text-base sm:text-lg mb-2 sm:mb-4">
        We are passionate about building interactive, modern web applications that delight users and solve real-world problems. Our team combines creativity, technology, and a love for innovation.
      </p>
      <div className="flex justify-center gap-3 sm:gap-6 mt-4 sm:mt-6">
        <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Team Member 1" className="h-8 w-8 sm:h-12 sm:w-12 rounded-full object-cover" />
        <img src="https://randomuser.me/api/portraits/women/46.jpg" alt="Team Member 2" className="h-8 w-8 sm:h-12 sm:w-12 rounded-full object-cover" />
        <img src="https://randomuser.me/api/portraits/men/47.jpg" alt="Team Member 3" className="h-8 w-8 sm:h-12 sm:w-12 rounded-full object-cover" />
      </div>
    </div>
  );
};

export default About; 