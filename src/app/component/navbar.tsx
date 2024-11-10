import Link from 'next/link'
import React from 'react'
function Navbar() {
  return (
    <div>
      <div className='max-w-screen-2xl mx-auto'>
        <ul className='flex justify-center gap-5 bg-[#9b4819] text-[#f2e1d6] py-2 h-12 text-lg font-bold lg:text-2xl  '>
            <li ><Link href='/'>Home</Link></li>
            <li><Link href='/about'>about</Link></li>
            <li><Link href='/services'>services</Link></li>
            <li><Link href='/contact-me'>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar