import { Button } from '@/components/ui/button';
import React from 'react';

function Contactme() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#f2e1d6] rounded-2xl p-8 shadow-lg">
        {/* Left Panel */}
        <div className="bg-[#9b4819] text-white p-6 rounded-2xl shadow-md flex flex-col justify-center">
          <h2 className="text-3xl font-bold italic font-serif mb-4 text-center md:text-left">Contact Me</h2>
          <p className="text-md text-center md:text-left">
            I read all messages. Feel free to get in touch—I will get back to you as soon as I can!
          </p>
        </div>

        {/* Right Panel - Form */}
        <form className="bg-[#9b4819] text-white p-6 rounded-2xl shadow-md grid gap-4">
          <h2 className="text-2xl font-bold italic font-serif">Send me a message</h2>

          <input
            type="text"
            placeholder="First Name"
            className="p-3 rounded-lg bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4d2d19]"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-3 rounded-lg bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4d2d19]"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-3 rounded-lg bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4d2d19]"
          />

          <Button type="submit" className="bg-[#4d2d19] hover:bg-[#3b2314] text-white font-semibold rounded-md mt-2">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contactme;
