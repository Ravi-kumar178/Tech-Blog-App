import React from 'react'
import { BiSolidLike } from 'react-icons/bi'
import { FaAsymmetrik } from 'react-icons/fa'
import { FaCss3, FaTv } from 'react-icons/fa6'
import { HiCubeTransparent } from 'react-icons/hi'
import { LuBox } from 'react-icons/lu'


const Services = () => {
  return (
    <div>
       <div className='bg-black px-4 py-40 text-white mx-auto'>
        <h1 className=' capitalize font-bold lg:text-7xl text-5xl leading-snug text-center'>Our Services</h1>
       </div>
       <div className='mt-12 mb-12 flex flex-col justify-between gap-4 items-center'>
         <p className=' text-orange-700 font-semibold text-xl tracking-wide'>Our Services</p>
         <p className='text-3xl font-bold tracking-wide'>What We Offer</p>
         <p className='text-base md:max-w-xl text-center text-gray-500  mx-auto'>There are many variations of passages of Lorem ipsum available but the majority have suffered alteration in some form</p>
       </div>

       {/* services card */}
       <div className='max-w-6xl m-12   mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-8 grid-cols-1'>
         <div className=' space-y-4 px-4 py-6 bg-white rounded-xl border-r-2 border-l-2 border-b-2 shadow-lg'>
           <p className='text-6xl font-bold text-blue-800'><FaAsymmetrik/></p>
           <div className='space-y-2'>
            <h1 className='text-xl text-gray-900 font-semibold tracking-wide'>Refreshing Design</h1>
            <p className='text-base text-gray-500'>We enjoy working with discrening clients, people for whom quality, service, Integrity & aesthetics</p>
           </div>
         </div>
         <div className=' space-y-4 px-4 py-6 bg-white rounded-xl border-r-2 border-l-2 border-b-2 shadow-lg'>
           <p className='text-6xl font-bold text-blue-800'><FaCss3/></p>
           <div className='space-y-2'>
            <h1 className='text-xl text-gray-900 font-semibold tracking-wide'>Based on Tailwind CSS</h1>
            <p className='text-base text-gray-500'>We enjoy working with discrening clients, people for whom quality, service, Integrity & aesthetics</p>
           </div>
         </div>
         <div className=' space-y-4 px-4 py-6 bg-white rounded-xl border-r-2 border-l-2 border-b-2 shadow-lg'>
           <p className='text-6xl font-bold text-blue-800'><LuBox/></p>
           <div className='space-y-2'>
            <h1 className='text-xl text-gray-900 font-semibold tracking-wide'>300+ Components</h1>
            <p className='text-base text-gray-500'>We enjoy working with discrening clients, people for whom quality, service, Integrity & aesthetics</p>
           </div>
         </div>
         <div className=' space-y-4 px-4 py-6 bg-white rounded-xl border-r-2 border-l-2 border-b-2 shadow-lg'>
           <p className='text-6xl font-bold text-blue-800'><FaTv/></p>
           <div className='space-y-2'>
            <h1 className='text-xl text-gray-900 font-semibold tracking-wide'>Speed Optimized</h1>
            <p className='text-base text-gray-500'>We enjoy working with discrening clients, people for whom quality, service, Integrity & aesthetics</p>
           </div>
         </div>
         <div className=' space-y-4 px-4 py-6 bg-white rounded-xl border-r-2 border-l-2 border-b-2 shadow-lg'>
           <p className='text-6xl font-bold text-blue-800'><HiCubeTransparent/></p>
           <div className='space-y-2'>
            <h1 className='text-xl text-gray-900 font-semibold tracking-wide'>Fully Customizable</h1>
            <p className='text-base text-gray-500'>We enjoy working with discrening clients, people for whom quality, service, Integrity & aesthetics</p>
           </div>
         </div>
         <div className=' space-y-4 px-4 py-6 bg-white rounded-xl border-r-2 border-l-2 border-b-2 shadow-lg'>
           <p className='text-6xl font-bold text-blue-800'><BiSolidLike/></p>
           <div className='space-y-2'>
            <h1 className='text-xl text-gray-900 font-semibold tracking-wide'>Regular Updates</h1>
            <p className='text-base text-gray-500'>We enjoy working with discrening clients, people for whom quality, service, Integrity & aesthetics</p>
           </div>
         </div>
       </div>
    </div>
  )
}

export default Services