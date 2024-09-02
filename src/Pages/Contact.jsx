import React from 'react'
import image from "../assets/contact.png"

const Contact = () => {
  return (
    <div>
      {/* Banner */}
       <div className='bg-black px-4 py-40 text-white mx-auto'>
        <h1 className=' capitalize font-bold lg:text-7xl text-5xl leading-snug text-center'>Contact Us</h1>
       </div>

       {/* Contact us section */}
       <div  className='max-w-6xl m-12   mx-auto grid md:grid-cols-2  gap-8 grid-cols-1'>
          <div>
             <img src={image} alt='' loading='lazy'/>
          </div>
          {/* form */}
          <form className='flex flex-col space-y-4'>
            <div className='flex flex-col gap-2 w-full'>
              <label className='font-primary font-medium' htmlFor='fullName'>Full Name</label>
              <input className='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-md aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none' type='text' id='fullName' name='fullName' placeholder='Full Name...'/>
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label className='font-primary font-medium' htmlFor='email'>Email Address</label>
              <input className='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-md aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none' type='email' id='email' name='email' placeholder='Email...'/>
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label className='font-primary font-medium' htmlFor='subject'>Subject</label>
              <input className='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-md aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none' type='text' id='subject' name='subject' placeholder='Subject...'/>
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label className='font-primary font-medium' htmlFor='subject'>Message</label>
              <textarea className='flex-grow w-full h-24 py-2 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-md aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none' type='text' id='message' name='message' placeholder='Enter Your Message...'/>
            </div>
            <button className='inline-flex w-fit justify-center items-center h-12 px-6  tracking-wide text-white  rounded shadow-md bg-violet-800 hover:bg-white hover:text-violet-800 transition-all duration-200 font-semibold focus:outline-none border' type='submit'>Submit</button>
          </form>
       </div>
    </div>
  )
}

export default Contact