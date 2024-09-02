import React, { useState } from 'react'
import data from "../api/blogsData.json"
import BlogCard from './BlogCard'
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

const BlogPage = () => {
    const [selectedcategory, setSelectedCategory] = useState(null);
    const pageSize = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const [activeCategory, setActiveCategory] = useState(null);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }

  return (
    <div>
        {/*Categorization */}
        <div>
            <CategorySelection selectedcategory={selectedcategory} onSelectedCategory = {handleCategoryChange} activeCategory={activeCategory}/>
        </div>
        {/*Blog card */}
        <div className='flex flex-col lg:flex-row gap-12'>
            <BlogCard data={data} selectedcategory={selectedcategory} currentPage={currentPage} pageSize={pageSize}/>

            {/* sidebar */}
            <SideBar data={data}/>
        </div>
        {/*Pagination */}
        <div className='my-4'>
            <Pagination onPageChange = {handlePageChange} currentPage={currentPage} data={data} pageSize={pageSize}/>
        </div>
    </div>
  )
}

export default BlogPage