import React from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-gray-900 '>
        <div className='px-4 pb-8 md:px-24 lg:px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl '>
            <div className='grid lg:grid-cols-6 mb-8'>
                {/* Footer main */}
                <div  className='grid grid-cols-2 md:grid-cols-4 lg:col-span-4 gap-5'>
                <div className=''>
                  <p className='text-gray-300 font-medium tracking-wide'>Category</p>
                  <ul className='mt-2 space-y-2'>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>News</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>World</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Games</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Refereces</a>
                    </li>
                  </ul>
                </div>
                <div className=''>
                  <p className='text-gray-300 font-medium tracking-wide'>Apples</p>
                  <ul className='mt-2 space-y-2'>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Web</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>eCommerce</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Business</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Entertainment</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Portfolio</a>
                    </li>
                  </ul>
                </div>
                <div className=''>
                  <p className='text-gray-300 font-medium tracking-wide'>Cherry</p>
                  <ul className='mt-2 space-y-2'>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Media</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Brochure</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Non-Profit</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Education</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Projects</a>
                    </li>
                  </ul>
                </div>
                <div className=''>
                  <p className='text-gray-300 font-medium tracking-wide'>Business</p>
                  <ul className='mt-2 space-y-2'>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Infopreneur</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Personal</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Wiki</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Forum</a>
                    </li>
                    <li>
                        <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Projects</a>
                    </li>
                  </ul>
                </div>

                {/* copyright part */}
                <div></div>
                </div>

                {/*Subscription */}
                <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                    <p className='font-medium tracking-wide text-gray-300'>Subscribe for updates</p>
                    <form className='flex flex-col mt-4 md:flex-row'>
                        <input className='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none' type='email' id='email' placeholder='Subscribe...'/>
                        <button className='inline-flex justify-center items-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  hover:bg-orange-500 focus:outline-none border' type='submit'>Subscribe</button>
                    </form>
                    <p className='text-sm text-gray-500 mt-5'>Our collection of the best technical blogs on the internet. Topics include programming blogs, developer blogs, software engineering blogs, and more.</p>
                </div>
            </div>

            {/* copyright */}
            <div className='flex flex-col sm:flex-row justify-between pt-5 pb-10 border-t border-gray-800'>
                <p className='text-sm text-gray-500'>© Copyright 2023 | All right reserved</p>
                <div className='flex items-center mt-4 sm:mt-0 space-x-4'>
                    <a href='/' className='text-gray-500 hover:text-orange-500 transition-all duration-200'><FaTwitter className='h-6 w-6'/></a>
                    <a href='/' className='text-gray-500 hover:text-orange-500 transition-all duration-200'><FaLinkedin className='h-6 w-6'/></a>
                    <a href='/' className='text-gray-500 hover:text-orange-500 transition-all duration-200'><FaFacebook className='h-6 w-6'/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer