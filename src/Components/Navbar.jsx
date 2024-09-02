import React, { useState } from 'react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaBars, FaXmark } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

function Navbar() {
  /* isMenuOpen or not */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  /* function on clicking the bar */
  const toggleFunction = ()=>{
    setIsMenuOpen(!isMenuOpen);
  }

 /*  navItems */
 const navItems = [
   {path:"/",text:"Home"},
   {path:"/services",text:"Services"},
   {path:"/about",text:"About"},
   {path:"/blogs",text:"Blogs"},
   {path:"/contact",text:"Contact"},
 ]

  return (
    <header className='bg-black text-white fixed top-0 right-0 left-0'>
       <nav className='mx-auto flex justify-between items-center p-4 max-w-7xl'>
          <a href='/' className='text-xl font-bold text-white'>Tech<span className=' text-2xl text-orange-400'>BG</span></a>

          {/* navitems */}
           <ul className='font-semibold text-lg md:flex hidden items-center gap-x-12'>
            {
              navItems.map(({path,text})=>(
                <li key={path} className='hover:text-orange-400 transition-all duration-200'>
                  <NavLink to={path} >{text}</NavLink>
                </li>
              ))
            }
          </ul> 

          <div className='lg:flex hidden items-center gap-x-4 '>
             <a href='https://www.linkedin.com/in/ravi-kumar-b55336229/' className='text-2xl hover:text-orange-400 ease-in duration-200'><FaLinkedin/></a>
             <a href='https://mail.google.com/mail/u/0/#inbox' className='text-2xl hover:text-orange-400 ease-in duration-200'><IoMail/></a>
             <a href='https://x.com/TheRaviThakur2' className='text-2xl hover:text-orange-400 ease-in duration-200'><FaTwitter/></a>
             <button className='text-xl px-6 py-2 bg-orange-500 font-semibold rounded hover:bg-white hover:text-orange-500 transition-all ease-out duration-200 '>Log in</button>
          </div>

          {/* sidebar */}
          <button onClick={toggleFunction} className='md:hidden '>
            {
              isMenuOpen? <FaXmark className='h-5 w-5'/>:<FaBars className='h-5 w-5'/>
            }
          </button>
       </nav>
        
          {/* li */}
          {/* navitems */}
          <ul className={`md:hidden block gap-12 text-lg space-y-4 bg-white text-black px-4 py-6 mt-16 ${isMenuOpen?"fixed top-0 left-0 w-full transition-all duration-200":"hidden"} `}>
            {
              navItems.map(({path,text})=>(
                <li key={path} className='hover:text-orange-400 transition-all duration-200'>
                  <NavLink to={path} onClick={toggleFunction} >{text}</NavLink>
                </li>
              ))
            }
          </ul> 

    </header>
  )
}

export default Navbar