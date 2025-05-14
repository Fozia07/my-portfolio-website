import React from 'react';

function Header() {
  return (
    <div className="relative bg-white overflow-hidden border-b border-[#9b4819]">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-20 lg:px-36 py-20">
        <div className="animate-fade-in-up space-y-8 text-center md:text-left">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
            Hello, <span className="text-[#9b4819]">I am Fozia</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-gray-700 max-w-2xl mx-auto md:mx-0">
            Creating beautiful, responsive websites that blend innovative design with seamless functionality.
            Lets turn your ideas into digital experiences that engage and inspire.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#9b4819] text-white rounded-xl shadow-md hover:bg-[#7d3714] transition duration-300"
            >
              View My Work
            </a>
            <a
              href="/72b30753-fd8d-4767-be69-ff2be8765584.pdf"
              download="Fozia_Mustafa_CV.pdf"
              className="px-6 py-3 border border-[#9b4819] text-[#9b4819] rounded-xl shadow-md hover:bg-[#9b4819] hover:text-white transition duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
