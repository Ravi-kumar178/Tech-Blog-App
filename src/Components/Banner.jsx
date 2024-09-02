import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='bg-black px-4 py-32 text-white mx-auto'>
        <h1 className=' capitalize font-bold lg:text-7xl text-5xl leading-snug text-center'>welcome to our blog</h1>
        <p className='lg:w-3/5 font-primary max-w-7xl text-center mx-auto text-gray-300 text-lg m-5'>Start your blog today and join a community of writers and readers are passionate about sharing their stories and ideas. We offer everything you need to get started, from helpful tips and tutorials.</p>
        <div className='mx-auto flex justify-center items-center text-gray-300 text-lg'>
            <Link to={"/"} className='inline-flex mx-auto hover:text-orange-400 transition-all duration-200'>
              Learn More 
              <FaArrowRight className='mt-1.5 ml-2'/>
            </Link>
        </div>
    </div>
  )
}

export default Banner