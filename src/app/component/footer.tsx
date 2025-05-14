import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#4d2d19] text-[#f2e1d6] mt-16">
      {/* Social Media + Contact Icons */}
      <div className="max-w-screen-2xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex gap-6">
          <Link href="https://www.facebook.com" target="_blank" aria-label="Facebook">
            <FacebookIcon className="w-6 h-6 hover:text-white transition duration-300" />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram">
            <InstagramIcon className="w-6 h-6 hover:text-white transition duration-300" />
          </Link>
          <Link href="mailto:fozia.mustafa07@gmail.com" aria-label="Email">
            <MailIcon className="w-6 h-6 hover:text-white transition duration-300" />
          </Link>
          <a href="tel:+923363822183" aria-label="Phone">
            <PhoneIcon className="w-6 h-6 hover:text-white transition duration-300" />
          </a>
        </div>

        {/* Copywriting */}
        <p className="text-sm sm:text-md text-center font-medium font-serif">
          &copy; 2024 | All Rights Reserved by RIEAD
        </p>
      </div>
    </footer>
  );
}

export default Footer;
