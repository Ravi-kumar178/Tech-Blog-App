import React from 'react'

const Pagination = ({pageSize,data,currentPage,onPageChange}) => {

    const totalPages = Math.ceil(data.length/pageSize);
    console.log(totalPages);

    const renderPagination = () => {
        return Array.from({length:totalPages},(_,i)=>i+1)
               .map((pageNumber)=>(
                 <li key={pageNumber} className={pageNumber === currentPage?"activePagination":""}>
                    <a href='#' onClick={()=>onPageChange(pageNumber)}>{pageNumber}</a>
                 </li>
               ))
    }

  return (
    <ul className='my-8 pagination flex-wrap gap-4 '>
       <li>
        <button onClick={()=>onPageChange(currentPage-1)} disabled={currentPage === 1}>Previous</button>
       </li> 

        <div className='flex gap-1'>{renderPagination()}</div>

       <li>
        <button onClick={()=>onPageChange(currentPage+1)} disabled={currentPage === totalPages}>Next</button>
       </li> 
    </ul>
  )
}

export default Pagination