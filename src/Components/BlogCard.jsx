import React from 'react'
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogCard = ({data, selectedcategory, currentPage, pageSize}) => {
    const filteredBlogs = data.filter((blog)=>!selectedcategory || blog.category === selectedcategory)
                          .slice((currentPage-1)*pageSize,currentPage*pageSize)
    console.log(filteredBlogs);
    return (
        <div className='m-5 grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8  '>
            {
                filteredBlogs.map((blog)=>(
                    <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 shadow-lg rounded cursor-pointer'>
                        <div>
                            <img src={blog.image} className='w-full' alt='' loading='lazy'></img>
                        </div>
                        <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h3>
                        <p className='text-gray-600 mb-2 inline-flex'><FaUser className='mt-1 mr-2'/>{blog.author}</p>
                        <p className='text-sm text-gray-500'>Published: {blog.published_date}</p>
                    </Link>
                ))
            }
        </div>
    )
}

export default BlogCard