import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const SideBar = ({data}) => {
    const [popularBlogs,setPopularBlogs] = useState([]);
    useEffect(()=>{
      if (Array.isArray(data)) {
        setPopularBlogs(data.slice(0, 15));
      }
    },[data]);
    console.log(popularBlogs);
  return (
    <div className='mt-5'>
      {/* Latest Blog */}
        <div>
           <h3 className='text-2xl font-semibold px-4'>Latest Blogs</h3>
           <div className=''>
             {
              popularBlogs.slice(0,6).map((blogs)=>(
                <div key={blogs.id} className='px-4 my-5  border-b-2 border-spacing-4'>
                  <h3 className='font-medium mb-2'>{blogs.title}</h3>
                  <Link to={`/blogs/${blogs.id}`}className='pb-2 inline-flex mx-auto hover:text-orange-400 transition-all duration-200'>
                    Read More 
                    <FaArrowRight className='mt-[5px] ml-2'/>
                  </Link>  
                </div>
              ))
             }
           </div>
        </div>

      {/* Popular Blog */}  
      <div className='mt-20'>
           <h3 className='text-2xl font-semibold px-4'>Popular Blogs</h3>
           <div className=''>
             {
              popularBlogs.slice(6,10).map((blogs)=>(
                <div key={blogs.id} className='px-4 my-5  border-b-2 border-spacing-4'>
                  <h3 className='font-medium mb-2'>{blogs.title}</h3>
                  <Link to={`/blogs/${blogs.id}`} className='pb-2 inline-flex mx-auto hover:text-orange-400 transition-all duration-200'>
                    Read More 
                    <FaArrowRight className='mt-[5px] ml-2'/>
                  </Link>  
                </div>
              ))
             }
           </div>
        </div>
    </div>
  )
}

export default SideBar