import React from 'react'
import Image from 'next/image'
import figma from '@/app/component/public/tabler_brand-figma.png' 
import insta from '@/app/component/public/tabler_brand-instagram.png' 
import linkden from '@/app/component/public/tabler_brand-linkedin.png' 
import img1 from '@/app/component/public/Rectangle 26 (1).png'
import { Button } from '@/components/ui/button'

function About() {
  return (<div className='max-w-screen-2xl mx-auto'> 
    <div className='border-2 border-solid border-[#9b4819] rounded-2xl'>
     <div className='grid grid-cols-1 sm:mx-18 md:mx-24 lg:grid-cols-3 lg:mx-4 lg:pr-52'>
       <div>
         <h1 className='Radley italic font-bold text-2xl mx-24 my-5'>Little bit <br/> <span className='text-4xl'>About me</span></h1>
         <Image src={img1}alt=''className='rounded-t-3xl opacity-50 my-10 mr-4 lg:mx-10'></Image>
       </div>
       <div className=' grid grid-cols-3 w-32 ml-12  md:mx-16 lg:grid-cols-1 lg:h-3 lg:w-14 lg:ml-10 lg:pt-36'>
          <Image src={figma} alt='' className='opacity-40 hover:opacity-100'></Image>
          <Image src={insta} alt='' className='opacity-40 hover:opacity-100'></Image>
          <Image src={linkden} alt='' className='opacity-40 hover:opacity-100'></Image>
       </div>
       <div className=' mr-14 px-6 sm:pr-24 md:pr-28 lg:pr-3 lg:pt-32  '>
       <p className='cartlito text-sm text-left lg:text-base'>I’m <span className='font-bold carlito'>FOZIA MUSTAFA</span>, a passionate Web Developer and Designer committed to transforming ideas into visually stunning and highly functional websites. With a deep understanding of both creative design and technical development, I bridge the gap between aesthetics and functionality, delivering seamless, responsive, and engaging user experiences. Let's bring your vision to life with a website that not only looks great but performs flawlessly.</p>
         <Button className='bg-[#9b4819] rounded-lg my-5' size={'lg'}>Hire me</Button>
      </div> 
     </div>
  
    </div>
  </div>
)     
}
    

    
  

export default About