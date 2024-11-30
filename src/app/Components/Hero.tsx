"use client"
import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect';


const Hero = () => {
  return (
    <div className='bg-gray-100'>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    
      <h1 className="title-font sm:text-4xl text-3xl  font-medium text-blue-600  mb-10">Before they sold out
       <span className='text-black text-2xl '>
        <Typewriter
  options={{
    strings: ['Winter Collection , Summer Collection ' , ' New Arrival , 12.12 Sale'],
    autoStart: true,
    loop: true,
  }}
/>
</span>
      </h1>
      <p className="mb-8 text-xl font-sans leading-relaxed"> Step into the world of trendy fashion tailored just for you! At [Brand Name], we bring you a curated collection of chic apparel, stunning accessories, and must-have essentials designed to elevate your wardrobe. From casual wear to statement pieces, our collection reflects the latest trends, ensuring you shine every day. Whether you're dressing for work, play, or a special occasion, we make fashion fun, effortless, and uniquely yours. Explore [Brand Name] today and redefine your style journey!</p>
     
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
     <Image src={require("../../../public/hero.jpg")} alt='Hero' width={300} height={300} className='ml-24'/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero
