import React from 'react'

const CategorySelection = ({selectedCategory, onSelectedCategory, activeCategory}) => {

    /* categories */
    const categories = ["Startups","AI","Tech","Apps"];
  return (
    <div className='flex flex-wrap items-center lg:space-x-16 border-b-2 px-4 mb-4 py-5 font-semibold text-gray-900'>
        <button className={`lg:ml-12 ${activeCategory?"":"text-[#fc3c1a]"}`} onClick={()=>onSelectedCategory(null)}>All</button>
        {
            categories.map((category)=> (
                <button className={`mr-2 ${activeCategory===category?"text-[#fc3c1a]":""}`} key={category} onClick={()=>onSelectedCategory(category)}>{category}</button>
            ))
        }
    </div>
  )
}

export default CategorySelection