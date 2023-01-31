import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex items-center justify-between '>
        <div className='pt-2'>
            logo
        </div>
        <div className='hidden md:flex space-x-6'>
            <Link to="/pricing" className='hover:text-gray-400'>pricing</Link>
            <Link to="/product"  className='hover:text-gray-400'>Product</Link>
            <Link to="/about"  className='hover:text-gray-400'>About</Link>
            <Link to="/career"  className='hover:text-gray-400'>Career</Link>
            <Link to="/contact"  className='hover:text-gray-400'>Contact</Link> 
            <Link to="/community"  className='hover:text-gray-400'>Community</Link>     

        </div>
         
         <a href className=' hidden md:block  bg-red-500 rounded-full px-2 py-2 hover:bg-gray-500 text-white curs'>Get Started</a>
        
       <button className='block hamburger md:hidden focus:outline-none '>
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom '></span>

        </button>

        <div class="md:hidden">
        <div
          id="menu"
          class="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>
        
        
    </div>
  )
}

export default Header