import React from 'react';
import Image from 'next/image';
import figma from '@/app/public/tabler_brand-figma.png';
import insta from '@/app/public/tabler_brand-instagram.png';
import linkden from '@/app/public/tabler_brand-linkedin.png';
import img1 from '@/app/public/Rectangle 26 (1).png';
import { Button } from '@/components/ui/button';

function About() {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 py-14">
      <div className="border-2 border-[#9b4819] rounded-3xl p-6 md:p-12 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Left - Heading + Image */}
          <div className="text-center lg:text-left">
            <h1 className="font-serif italic font-bold text-2xl mb-2">Little bit</h1>
            <h2 className="font-serif italic font-bold text-4xl text-[#9b4819] mb-6">About Me</h2>
            <Image
              src={img1}
              alt="Fozia Mustafa"
              className="rounded-3xl opacity-60 hover:opacity-100 transition duration-500 mx-auto lg:mx-0"
            />
          </div>

          {/* Center - Icons */}
          <div className="flex lg:flex-col items-center justify-center space-x-6 lg:space-x-0 lg:space-y-8">
             <Image src={figma} alt="Figma" className="opacity-40 hover:opacity-100 transition duration-300 w-12 h-12" />
             <Image src={insta} alt="Instagram" className="opacity-40 hover:opacity-100 transition duration-300 w-12 h-12" />
             <Image src={linkden} alt="LinkedIn" className="opacity-40 hover:opacity-100 transition duration-300 w-12 h-12" />
          </div>
          {/* Right - Description + Button */}
          <div className="text-left">
            <p className="font-sans text-gray-700 text-base leading-relaxed mb-6">
              I am <span className="font-bold">FOZIA MUSTAFA</span>, a passionate Web Developer and Designer committed to transforming ideas into visually stunning and highly functional websites. With a deep understanding of both creative design and technical development, I bridge the gap between aesthetics and functionality, delivering seamless, responsive, and engaging user experiences. Let’s bring your vision to life with a website that not only looks great but performs flawlessly.
            </p>
            <Button className="bg-[#9b4819] hover:bg-[#7d3714] text-white px-6 py-3 rounded-lg shadow transition duration-300">
              Hire me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
