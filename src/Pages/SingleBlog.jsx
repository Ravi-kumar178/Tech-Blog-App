import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../api/blogsData.json"
import { FaClock, FaUser } from 'react-icons/fa';
import SideBar from '../Components/SideBar';

const SingleBlog = () => {
    const {id }= useParams();
    console.log(id);
 
    const blogPost = data.find((blog)=> blog.id === parseInt(id));
  
    console.log(blogPost);

  return (
    <div>
        {/* Banner */}
        <div className='bg-black px-4 py-40 text-white mx-auto'>
         <h1 className=' capitalize font-bold lg:text-7xl text-5xl leading-snug text-center'>Single Blog Page</h1>
        </div>

        {/* Blog Details && Sidebar */}
        <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
            {/* Blog Details */}
            <div className='lg:w-3/4 mx-auto'>
                <div>
                    <img src={blogPost.image} alt='' loading='lazy' className='w-full mx-auto rounded'/>
                </div>
                <h2 className='text-3xl font-bold mt-8 mb-4 text-blue-500 cursor-pointer'>{blogPost.title}</h2>
                <p className='mb-3 text-gray-600'><FaUser className='inline-flex mr-2 items-center'/>{blogPost.author} | {blogPost.published_date}</p>
                <p className='mb-3 text-gray-600'><FaClock className='inline-flex mr-2 items-center'/>{blogPost.reading_time}</p>

                <p className='text-base text-gray-500 mb-6'>{blogPost.content}</p>

                <div className='text-base text-gray-500'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, hic quam id nam sed quae nihil repellendus rem eum fugiat dicta repudiandae. Ex optio adipisci accusantium maiores repellat doloremque expedita!</p><br/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, hic quam id nam sed quae nihil repellendus rem eum fugiat dicta repudiandae. Ex optio adipisci accusantium maiores repellat doloremque expedita!</p><br/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, hic quam id nam sed quae nihil repellendus rem eum fugiat dicta repudiandae. Ex optio adipisci accusantium maiores repellat doloremque expedita!</p><br/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, hic quam id nam sed quae nihil repellendus rem eum fugiat dicta repudiandae. Ex optio adipisci accusantium maiores repellat doloremque expedita!</p><br/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, hic quam id nam sed quae nihil repellendus rem eum fugiat dicta repudiandae. Ex optio adipisci accusantium maiores repellat doloremque expedita!</p><br/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, hic quam id nam sed quae nihil repellendus rem eum fugiat dicta repudiandae. Ex optio adipisci accusantium maiores repellat doloremque expedita!</p><br/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, hic quam id nam sed quae nihil repellendus rem eum fugiat dicta repudiandae. Ex optio adipisci accusantium maiores repellat doloremque expedita!</p><br/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, hic quam id nam sed quae nihil repellendus rem eum fugiat dicta repudiandae. Ex optio adipisci accusantium maiores repellat doloremque expedita!</p><br/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, hic quam id nam sed quae nihil repellendus rem eum fugiat dicta repudiandae. Ex optio adipisci accusantium maiores repellat doloremque expedita!</p><br/>
                </div>
            </div>

            {/* SideBar */}
            <div className='lg:w-1/2'>
                <SideBar data={data}/>
            </div>
        
        </div>
    </div>
  )
}

export default SingleBlog