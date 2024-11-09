import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='max-w-screen-2xl mx-auto '>
        <div className='bg-[#4d2d19] text-[#f2e1d6] py-5'>
            <p className='text-md text-center Radley font-medium'>Copywrite & Copy:2024|All Rigth Reserve by RIEAD</p>
        </div>
        <div className='flex justify-center gap-5 bg-[#4d2d19] text-[#f2e1d6]'>
            <Link href='https:/www.facebook.com'><FacebookIcon/></Link>
            <Link href='https:/www.insta.com'><InstagramIcon/></Link>
            <Link href='https:/www.google.com'><MailIcon/></Link>
            <PhoneIcon/>
        </div>

    </div>
  )
}

export default Footer