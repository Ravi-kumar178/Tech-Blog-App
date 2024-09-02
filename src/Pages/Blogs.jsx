import React from 'react'
import data from "../api/blogsData.json"
import BlogPage from '../Components/BlogPage';

const Blogs = () => {
  console.log(data);
  return (
    <div>
       <div className='bg-black px-4 py-40 text-white mx-auto'>
        <h1 className=' capitalize font-bold lg:text-7xl text-5xl leading-snug text-center'>Blogs Page</h1>
       </div>
       <div className='max-w-7xl mx-auto'>
          <BlogPage data={data}/>
       </div>
    </div>
  )
}

export default Blogs