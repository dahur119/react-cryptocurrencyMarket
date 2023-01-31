import React from 'react';
import  img from '../img/illustration-intro.svg';
import ant from '../img/avatar-anisha.png';
import { Link } from 'react-router-dom';
import logo from '../img/logo-white.svg';
import facebook from '../img/icon-facebook.svg';
import hamburger from '../img/icon-hamburger.svg';
import instagram from '../img/icon-instagram.svg';
import pinterest from '../img/icon-pinterest.svg';
import youtube from '../img/icon-youtube.svg'



export default function Main() {
  return (
    <>
      <section>
        <div className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0'>
        <div className='flex flex-col mb-32  space-y-12 md:w-1/2'>
            <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left '>
                Lorem ipsum dolor  consectetur repudiandaeperferendis.
            </h1>
            <p className='max-w-sm text-center text-red-300 md:text-left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eos maxime impedit veniam vitae dolorem, illum hic corporis bea
            </p>
            <div className='flex justify-center md:justify-start'>
            <p className=' bg-red-300 rounded-full px-2 py-2 hover:bg-gray-500 text-white curs'>Get Started</p>
            </div>

        </div>
        <div className='md:w-1/2'>
            <img src={img  }/>

        </div>
         

        </div> 
        <div>

        </div>

    </section>

    <section>
        <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row '>
            <div className='flex flex-col space-y-12 md:w-1/2 '>
                <h2 className=' max-w-md text-4xl text-center font-bold md:text-left '>
                    Lorem ipsum dolor sit,  adipisicing elit. Adipisci quam nihil ? 

                </h2>
                <p className='max-2-sm text-center text-red md:text-left'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quod harum, sequi distinctio, nemo beatae temporibus laborum velit repudiandae necessitatibus sunt ad magnauntur. Sed, dolores officiis.
                </p>
                
            </div>
            <div className='flex flex-col space-y-8  md:w-1/2'>
                <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
                     <div className='rounded-full bg-red-400 md:bg-transparent'>
                        <div className='flex items-center space-x-2'>
                            <div className='px-4 py-4 text-white rounded-full md:py-1 bg-red-300'>
                                01
                            </div>
                            <h3 className='text-base font-bold md:mb-4 md:hidden'>
                                Lorem ipsum dolor sit, adipi

                            </h3>

                        </div>


                     </div>
                    <div>
                        <h3 className='hidden mb-4 text-lg font-bold md:block'>
                            Lorem ipsum dolor sit amet 
                        </h3>
                        <p className='text-blue'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates totam velit debitis ipsam laudantium quia aliquid obcaecati, aut magnam nulla voluptatibus quos necessitatibus ratione 
                        </p>
                        
                    </div>

                </div>

                <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
                     <div className='rounded-full bg-red-400 md:bg-transparent'>
                        <div className='flex items-center space-x-2'>
                            <div className='px-4 py-4 text-white rounded-full md:py-1 bg-red-300'>
                                01
                            </div>
                            <h3 className='text-base font-bold md:mb-4 md:hidden'>
                                Lorem ipsum dolor sit, adipi

                            </h3>

                        </div>


                     </div>
                    <div>
                        <h3 className='hidden mb-4 text-lg font-bold md:block'>
                            Lorem ipsum dolor sit amet 
                        </h3>
                        <p className='text-blue'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates totam velit debitis ipsam laudantium quia aliquid obcaecati, aut magnam nulla voluptatibus quos necessitatibus ratione 
                        </p>
                        
                    </div>

                    


                </div>

                
                <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
                     <div className='rounded-full bg-red-400 md:bg-transparent'>
                        <div className='flex items-center space-x-2'>
                            <div className='px-4 py-4 text-white rounded-full md:py-1 bg-red-300'>
                                01
                            </div>
                            <h3 className='text-base font-bold md:mb-4 md:hidden'>
                                Lorem ipsum dolor sit, adipi

                            </h3>

                        </div>


                     </div>
                    <div>
                        <h3 className='hidden mb-4 text-lg font-bold md:block'>
                            Lorem ipsum dolor sit amet 
                        </h3>
                        <p className='text-blue'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates totam velit debitis ipsam laudantium quia aliquid obcaecati, aut magnam nulla voluptatibus quos necessitatibus ratione 
                        </p>
                        
                    </div>

                    


                </div>


                


            </div>

        </div>
    </section>
    

    <section>

    <div className='max-w-6xl px-5 max-auto mt-32 text-center'>
        <h2 className='text-4xl font-bold text-center'>
            Lorem ipsum dolor sit 

        </h2>
        <div className='flex flex-col mt-24 md:flex-row md:space-x-6 '>
            <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:w-1/3 '>
                <img src={ant} alt="" className='w-16 -mt-14'/>
                <h5 className='text-lg font-bold'>Anisha </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloribus expedita, laboriosam, ipsum quis nobis alias rerum inventore harum eligendi</p>
            </div>

            <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:w-1/3 '>
                <img src={ant} alt="" className='w-16 -mt-14'/>
                <h5 className='text-lg font-bold'>Anisha </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloribus expedita, laboriosam, ipsum quis nobis alias rerum inventore harum eligendi</p>
            </div>
           
            <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:w-1/3 '>
                <img src={ant} alt="" className='w-16 -mt-14'/>
                <h5 className='text-lg font-bold'>Anisha </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloribus expedita, laboriosam, ipsum quis nobis alias rerum inventore harum eligendi</p>
            </div>
           
        </div>
        <div className='mt-16'>
        <Link className='p-3 px-6 pt-2 text-white bg-red-300 rounded-full'>Get Started</Link>
                
        </div>

    </div>       
    </section>

    <section className='bg-red-500'>
        <div className='container flex flex-col items-center mt-12 justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>
            <h2 className='text-5xl font-bold leading-tight text-center text-white md:text-4xl md:4xl md:text-left'>
                Lorem, ipsum dolor sit amet 
            </h2>
            <div>
            <Link  className='p-3 px-6 pt-2 text-red-300 bg-white rounded-full hover:bg-gray-300'>Get Started</Link>
         


            </div>
        </div> 

    </section>

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
    
    </>
  
    
  )
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           