'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

import img1 from '@/app/public/logos_figma.png';
import img2 from '@/app/public/vscode-icons_file-type-html.png';
import img3 from '@/app/public/devicon_css3.png';
import img4 from '@/app/public/skill-icons_bootstrap.png';
import img5 from '@/app/public/vscode-icons_file-type-js-official.png';
import img6 from '@/app/public/Group.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

function Service() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-12">
    {/* Services Section */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="border-4 border-[#9b4819] rounded-2xl p-6"
    >
      <h1 className="text-3xl md:text-4xl Radley italic font-bold text-center mb-10 underline">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Web Developer',
            text: 'As a developer, I find myself most captivated by the power and flexibility of NEXT.js. I am always eager to dive into new projects that leverage NEXT.js and discover innovative ways to create fast, scalable, and user-friendly applications.'
          },
          {
            title: 'App Developer',
            text: 'With a focus on user-centric design and cutting-edge technologies, I thrive on building intuitive and efficient apps that make a positive impact. Let’s turn ideas into reality and shape the future together.'
          },
          {
            title: 'UI/UX Designer',
            text: 'Creative and user-focused UI/UX designer dedicated to crafting intuitive, visually engaging digital experiences. Skilled in transforming complex requirements into seamless, user-friendly interfaces that balance aesthetics with functionality.'
          }
        ].map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={fadeInUp}
            className="bg-[#9b4819] border-4 border-[#4d2d19] rounded-xl p-6 hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-center text-xl font-semibold italic text-[#f2e1d6] mb-4">{service.title}</h2>
            <p className="text-center text-sm text-white leading-relaxed">{service.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Skills Section */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
      viewport={{ once: true }}
      className="mt-16 border-4 border-[#9b4819] rounded-2xl p-6"
    >
      <h1 className="text-3xl md:text-4xl Radley italic font-bold text-center mb-10 underline">Skills</h1>
      <div className="flex flex-wrap justify-center gap-10">
        {[img2, img3, img5, img6, img4, img1].map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src={img}
              alt={`skill-${i}`}
              className="w-20 h-20 object-contain hover:scale-110 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
  )
}

export default Service