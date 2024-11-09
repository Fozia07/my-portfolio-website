import { Button } from '@/components/ui/button'
import React from 'react'

function Contactme() {
  return (
    <div>
        <div className='max-w-screen-2xl mx-auto'>
           <div className=' bg-[#f2e1d6] grid grid-cols-1 gap-4 py-6 md:grid-cols-2'>
              <div className='bg-[#9b4819] border-4 border-solid border-[#9b4819] rounded-2xl shadow-xl w-full lg:w-2/3'> 
                  <h1 className='text-white text-2xl text-center my-4 font-bold italic Radley '>Contact me</h1>
                  <p className='text-white text-md text-center px-5'>I will read all emails. send me any message you want and I'll getback to you</p>
              </div>
              <div className='bg-[#9b4819] px-2 border-4 border-solid border-[#9b4819] rounded-2xl shadow-xl grid gap-6 py-4'>
                <h1 className='text-white text-2xl text-left my-4 font-bold italic  Radley '>Send me a message</h1>
                 <input type='text' placeholder='First name'></input>
                 <input type='text' placeholder='First name'></input>
                 <textarea typeof='text' placeholder='Message'></textarea>
                 <Button className='bg-[#4d2d19]'> submit</Button>
              </div>
           </div>
        </div>
    </div>
  )
}
export default Contactme