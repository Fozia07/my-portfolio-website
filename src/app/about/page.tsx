
import React from 'react'
import img1 from '@/app/component/public/Rectangle 26 (1).png'
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react'
import Image from 'next/image'
import figma from '@/app/component/public/tabler_brand-figma.png' 
import insta from '@/app/component/public/tabler_brand-instagram.png' 
import linkden from '@/app/component/public/tabler_brand-linkedin.png' 
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'

function Page() {
  return (
        
  <div className='max-w-screen-2xl mx-auto'> 
    <div className='grid grid-cols-1  md:grid-cols-2 md:gap-0 md:w-1/2'>
       <div className=' mb-4 pt-3 bg-[#9b4819] border-4 border-solid border-[#4d2d19] rounded-2xl mt-4 md:pt-11 pl-5'>
          <h1 className='Radley italic font-bold text-xl text-center text-[#f2e1d6] lg:text-2xl'>Fozia Mustafa</h1>
          <p className='carlito font-semibold text-md text-center text-[#f2e1d6] lg:text-lg'>UI/UX designer and web developer</p>
          <ul className='mt-8 text-[#4d2d19] Radley mx-3'>
            <li className='bg-[#f2e1d6] my-3'>Age : 40</li>
            <li className='bg-[#f2e1d6]  my-3'>Education :B.com</li>
            <li className='bg-[#f2e1d6] my-3'>Address : Karachi, Pakistan</li>
            <li className='bg-[#f2e1d6] my-3'>Freelancer :available</li>
          </ul>
          <div className='mx-3 my-4 flex gap-4'>
            <LinkedinIcon className='text-[#170e38] size-4  '/>
            <FacebookIcon className='text-[#170e38] size-4'/>
            <InstagramIcon className='text-[#170e38] size-4'/>
            <GithubIcon className='text-[#170e38] size-4'/>
          </div>
          <div>
            <h2 className=' italic text-xl font-semibold text-[#f2e1d6] underline mt-6'>Language</h2>
            <li className='bg-[#f2e1d6] my-3 decora'>English</li>
            <li className='bg-[#f2e1d6]  my-3'>Urdu</li>
          </div>
          <div>
          <h2 className=' italic text-xl font-semibold text-[#f2e1d6] underline mt-6'>Skills</h2>
          <p className='text-[#f2e1d6] mt-2'>html</p>
          <Progress value={75}/>
          <p className='text-[#f2e1d6] mt-2'>css</p>
          <Progress value={60}/>
          <p className='text-[#f2e1d6] mt-2'>typescript</p>
          <Progress value={70}/>
          <p className='text-[#f2e1d6] mt-2'>next.js</p>
          <Progress value={80}/>
         </div>
       
       </div>
       <div className='border-2 border-solid border-[#9b4819] rounded-2xl mt-4 md:w-screen 
       '>
       <div className='grid grid-cols-1 sm:mx-18 lg:grid-cols-3 lg:mx-4 lg:mr-96 '>
         <div className='w-screen'>
           <h1 className='Radley italic font-bold text-2xl mx-24 my-5 md:text-4xl '>Little bit <br/> <span className='text-6xl'>About me</span></h1>
           <Image src={img1}alt=''className='rounded-t-3xl opacity-50 my-10 mr-4'></Image>
         </div>
         <div className=' grid grid-cols-3 w-32 ml-12  md:mx-16 lg:grid-cols-1 lg:h-3 lg:w-14 lg:ml-40 lg:pt-52'>
            <Image src={figma} alt='' className='opacity-40 hover:opacity-100'></Image>
            <Image src={insta} alt='' className='opacity-40 hover:opacity-100'></Image>
            <Image src={linkden} alt='' className='opacity-40 hover:opacity-100'></Image>
         </div>
         <div className=' mr-14 px-6 sm:pr-6  lg:pt-32  '>
         <p className='cartlito text-sm text-left md:text-xl '>I’m <span className='font-bold carlito'>FOZIA MUSTAFA</span>, a passionate Web Developer and Designer committed to transforming ideas into visually stunning and highly functional websites. With a deep understanding of both creative design and technical development, I bridge the gap between aesthetics and functionality, delivering seamless, responsive, and engaging user experiences. Let's bring your vision to life with a website that not only looks great but performs flawlessly.</p>
         <Button className='bg-[#9b4819] rounded-lg my-5' size={'lg'}>Hire me</Button>
        </div> 
       </div>
       
      </div>
      </div> 
    </div>
  )     
}

export default Page