import React from 'react'
import image from '../assets/about.png'
import auth1 from '../assets/user-01.png'
import auth2 from '../assets/user-02.png'
import auth3 from '../assets/user-03.png'
import { FaFile } from 'react-icons/fa'

const About = () => {
  return (
    <div>
       {/* Banner */}
       <div className='bg-black px-4 py-40 text-white mx-auto'>
        <h1 className=' capitalize font-bold lg:text-7xl text-5xl leading-snug text-center'>About us</h1>
       </div>

       {/* section 1 */}
       <div className='my-16 max-w-6xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-16 '>
         <div>
          <img src={image} alt='' className='w-full mx-auto' loading='lazy'/>
         </div>

         <div className='w-full lg:block flex flex-col items-center my-4 sm:my-8 md:my-0 md:text-start text-center space-y-4'>
          <p className=' text-orange-700 font-semibold text-xl tracking-wide'>Who we are</p>
          <p className='text-3xl font-bold font-primary tracking-wide'>We Provide high quality Articles & Blogs</p>
          <div>
            <p className='text-base md:max-w-xl text-start text-gray-500  mx-auto'>Our tech blog app offers a seamless platform for sharing insights, with features like a user-friendly interface, real-time content management, SEO optimization, and secure authentication.</p>
            <p className='text-base md:max-w-xl text-start text-gray-500  mx-auto'>It supports multimedia posts, comment moderation, and social media integration, ensuring an engaging and dynamic experience for both writers and readers.</p>
          </div>
         </div>
       </div>

       {/* section2 */}
       <div className='text-3xl font-bold font-primary max-w-6xl mx-auto pb-6 border-b-2 border-b-gray-200 mb-12'>Top Authors</div>
       <div className='max-w-6xl mb-12 mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8'>
         {/* card */}
         <div className='w-full bg-gray-50 rounded-lg px-4 py-6 flex flex-col justify-center items-center space-y-4'>
           <img src={auth1} alt='' className='w-1/2' loading='lazy'/>
           <div className='flex flex-col items-center space-y-1'>
             <h1 className='font-semibold font-primary text-xl text-gray-800'>Adrio Devid</h1>
             <p className=' text-sm text-gray-600 font-primary'>Director of Operations</p>
             <p className='text-sm text-gray-500 font-primary'><FaFile className=' inline-flex items-center'/> 12 Articles published</p>
           </div>
         </div>
         <div className='w-full bg-gray-50 rounded-lg px-4 py-6 flex flex-col justify-center items-center space-y-4'>
           <img src={auth2} alt='' className='w-1/2' loading='lazy'/>
           <div className='flex flex-col items-center space-y-1'>
             <h1 className='font-semibold font-primary text-xl text-gray-800'>Rayna Mario</h1>
             <p className=' text-sm text-gray-600 font-primary'>Content Writer</p>
             <p className='text-sm text-gray-500 font-primary'><FaFile className=' inline-flex items-center'/> 8 Articles published</p>
           </div>
         </div>
         <div className='w-full bg-gray-50 rounded-lg px-4 py-6 flex flex-col justify-center items-center space-y-4'>
           <img src={auth3} alt='' className='w-1/2' loading='lazy'/>
           <div className='flex flex-col items-center space-y-1'>
             <h1 className='font-semibold font-primary text-xl text-gray-800'>Devid Tec</h1>
             <p className=' text-sm text-gray-600 font-primary'>Head of Marketing</p>
             <p className='text-sm text-gray-500 font-primary'><FaFile className=' inline-flex items-center'/> 5 Articles published</p>
           </div>
         </div>
         <div className='w-full bg-gray-50 rounded-lg px-4 py-6 flex flex-col justify-center items-center space-y-4'>
           <img src={auth1} alt='' className='w-1/2' loading='lazy'/>
           <div className='flex flex-col items-center space-y-1'>
             <h1 className='font-semibold font-primary text-xl text-gray-800'>Mark Jacob</h1>
             <p className=' text-sm text-gray-600 font-primary'>Head of Marketing</p>
             <p className='text-sm text-gray-500 font-primary'><FaFile className=' inline-flex items-center'/> 5 Articles published</p>
           </div>
         </div>
       </div>
    </div>
  )
}

export default About