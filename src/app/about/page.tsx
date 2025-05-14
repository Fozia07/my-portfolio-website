import React from 'react';
import Image from 'next/image';
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from '@/components/ui/progress';

import img1 from '@/app/public/Rectangle 26 (1).png';
import figma from '@/app/public/tabler_brand-figma.png';
import insta from '@/app/public/tabler_brand-instagram.png';
import linkden from '@/app/public/tabler_brand-linkedin.png';

const SocialLinks = () => (
  <div className="flex justify-center gap-6 mt-6">
    <LinkedinIcon className="w-6 h-6 hover:text-[#f2e1d6] transition" />
    <FacebookIcon className="w-6 h-6 hover:text-[#f2e1d6] transition" />
    <InstagramIcon className="w-6 h-6 hover:text-[#f2e1d6] transition" />
    <GithubIcon className="w-6 h-6 hover:text-[#f2e1d6] transition" />
  </div>
);

const SkillBar = ({ skill, value }: { skill: string; value: number }) => (
  <div>
    <p className="mb-1">{skill}</p>
    <Progress value={value} />
  </div>
);

const ProfileCard = () => (
  <div className="bg-[#9b4819] border-4 border-[#4d2d19] rounded-2xl p-6 text-white shadow-lg">
    <h1 className="text-3xl font-bold italic text-center font-serif">Fozia Mustafa</h1>
    <p className="text-lg text-center mt-1 font-light">UI/UX Designer & Web Developer</p>

    <ul className="mt-6 space-y-2 bg-[#f2e1d6] text-[#4d2d19] rounded-lg p-4 font-serif">
      <li>👤 Age: 40</li>
      <li>🎓 Education: B.Com</li>
      <li>📍 Address: Karachi, Pakistan</li>
      <li>💼 Freelancer: Available</li>
    </ul>

    <SocialLinks />

    <div className="mt-8">
      <h2 className="text-xl font-semibold underline font-serif mb-2">Languages</h2>
      <ul className="space-y-1">
        <li className="bg-[#f2e1d6] text-[#4d2d19] rounded px-3 py-1">English</li>
        <li className="bg-[#f2e1d6] text-[#4d2d19] rounded px-3 py-1">Urdu</li>
      </ul>
    </div>

    <div className="mt-8">
      <h2 className="text-xl font-semibold underline font-serif mb-4">Skills</h2>
      <div className="space-y-4">
        <SkillBar skill="HTML" value={75} />
        <SkillBar skill="CSS" value={60} />
        <SkillBar skill="TypeScript" value={70} />
        <SkillBar skill="Next.js" value={80} />
      </div>
    </div>
  </div>
);

const AboutSection = () => (
  <div className="bg-white border-2 border-[#9b4819] rounded-2xl p-6 shadow-md">
    <div className="space-y-6">
      <h2 className="font-serif italic text-2xl md:text-4xl font-bold text-[#4d2d19]">
        Little Bit <br />
        <span className="text-5xl text-[#9b4819]">About Me</span>
      </h2>

      <Image
        src={img1}
        alt="Fozia Profile"
        className="rounded-2xl opacity-60 hover:opacity-100 transition duration-500"
      />

      <div className="flex justify-start gap-6 mt-6">
        <Image src={figma} alt="Figma" className="w-10 h-10 opacity-40 hover:opacity-100 transition" />
        <Image src={insta} alt="Instagram" className="w-10 h-10 opacity-40 hover:opacity-100 transition" />
        <Image src={linkden} alt="LinkedIn" className="w-10 h-10 opacity-40 hover:opacity-100 transition" />
      </div>

      <p className="text-base md:text-lg text-gray-700 font-sans leading-relaxed">
        I am <span className="font-bold">Fozia Mustafa</span>, a passionate Web Developer and Designer committed to transforming ideas into visually stunning and highly functional websites. With a deep understanding of both creative design and technical development, I bridge the gap between aesthetics and functionality, delivering seamless, responsive, and engaging user experiences. Lets bring your vision to life with a website that not only looks great but performs flawlessly.
      </p>

      <Button className="bg-[#9b4819] hover:bg-[#7d3714] text-white mt-4">Hire Me</Button>
    </div>
  </div>
);

function Page() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-10 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProfileCard />
        <AboutSection />
      </div>
    </div>
  );
}

export default Page;
