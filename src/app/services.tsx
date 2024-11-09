import Image from 'next/image'
import React from 'react'
import img1 from '@/app/component/public/logos_figma.png'
import img2 from '@/app/component/public/vscode-icons_file-type-html.png'
import img3 from '@/app/component/public/devicon_css3.png'
import img4 from '@/app/component/public/skill-icons_bootstrap.png'
import img5 from '@/app/component/public/vscode-icons_file-type-js-official.png'
import img6 from '@/app/component/public/Group.png'

function Services() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <div className='border-solid border-4 border-[#9b4819] rounded-2xl my-4'>
            <h1 className='text-2xl Radley italic font-bold text-center my-11 underline'>Services</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-28'>
              <div className='bg-[#9b4819] border-solid border-4 border-[#4d2d19] my-3'>
                <h1 className='text-center carlito italic font-semibold text-xl text-[#f2e1d6]'>web developer</h1>
                <p className='text-center carlito text-sm '>As a developer, I find myself most captivated by the power and flexibility of 
                 NEXT.js. I'm always eager to dive into new projects that leverage NEXT.js and 
                 discover innovative ways to create fast, scalable, and user-friendly applications.</p>
              
              </div>
              <div className='bg-[#9b4819] border-solid border-4 border-[#4d2d19] my-3'>
                <h1 className='text-center carlito italic font-semibold text-xl text-[#f2e1d6]'>app developer</h1>
                <p className='text-center carlito text-sm '>With a focus on user-centric design andcutting-edge technologies, I thrive on 
                building intuitive and efficient apps that make a postive impact on people's lives. Let's turn ideas into reality and 
                shape the future together.</p>
              
              </div>
              <div className='bg-[#9b4819] border-solid border-4 border-[#4d2d19] my-3'>
                <h1 className='text-center carlito italic font-semibold text-xl text-[#f2e1d6]'>UI/UX designer</h1>
                <p className='text-center carlito text-sm '>Creative and user-focused UI/UX designer dedicated to crafting intuitive, 
                 visually engaging digital experiences. Skilled in transforming complex requirements into seamless, user-friendly interfaces
                  that balance aesthetics with functionality.
                </p>
              </div>

            </div>
      <div>
        <h1 className='text-2xl Radley italic font-bold text-center my-11 underline'>Skills</h1>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-28 ml-10 px-10 space-y-16 my-11'>
          <Image src={img2} alt=''className='mt-14'></Image>
          <Image src={img3} alt=''></Image>
          <Image src={img5} alt=''></Image>
          <Image src={img6} alt=''></Image>
          <Image src={img4} alt=''></Image>
          <Image src={img1} alt=''></Image>
        
        </div>
       </div>

      </div>
    </div>
  )
}

export default Services