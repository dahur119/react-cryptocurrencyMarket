import React from 'react'
import facebook from '../img/icon-facebook.svg';
import hamburger from '../img/icon-hamburger.svg';
import instagram from '../img/icon-instagram.svg';
import pinterest from '../img/icon-pinterest.svg';
import youtube from '../img/icon-youtube.svg';
import logo from '../img/logo-white.svg';

function Footer() {
  return (
    <footer className='bg-blue-900 '>
        <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
        <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>

            <div className='mx-auto my-6 text-center text-white md:hidden'>
                copyright 2023
            </div>
        <div>
            <img src={logo} className="h-8" alt=' '/>
        </div>
        <div className='flex justify-center space-x-4'>
            <a href="#" >
                <img src={facebook} alt="" className='h-8'/>

            </a>
            <a href="#" >
                <img src={hamburger} alt="" className='h-8'/>

            </a>
            <a href="#" >
                <img src={youtube} alt="" className='h-8'/>

            </a>
            <a href="#" >
                <img src={pinterest} alt="" className='h-8'/>

            </a>
            <a href="#" >
                <img src={instagram} alt="" className='h-8'/>

            </a>
        </div>
        </div>
        <div class="flex justify-around space-x-32">
          <div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-brightRed">Home</a>
            <a href="#" class="hover:text-brightRed">Pricing</a>
            <a href="#" class="hover:text-brightRed">Products</a>
            <a href="#" class="hover:text-brightRed">About</a>
          </div>
          <div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-brightRed">Careers</a>
            <a href="#" class="hover:text-brightRed">Community</a>
            <a href="#" class="hover:text-brightRed">Privacy Policy</a>
          </div>
        </div>
        <div className='flex flex-col                                                                               justify-between'>
            <form>
                <div className='felx space-x-3 '>
                    <input type="text" className='flex-1 px-6 py-2 rounded-full focus:outline'
                    placeholder='update in you inbox'/>
                    <button className='px-6 py-2 text-white rounded-full bg-red-400 hover:bg-red-500 focus:outline-none ' >Go</button>
                </div>

            </form>
            <div className='hidden text-white md:block'>
                copyright 2023 Adedadayo

            </div>
        </div>
        
 
       
        </div>

    </footer>
  )
}

export default Footer