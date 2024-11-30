import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-200'>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
     
     <Image src={require("../../../public/Humaiza Fasion.png")} alt='Monogram' width={90} height={90}/>

      <span className="ml-3 text-xl font-serif font-bold">Humaiza Fashion</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-blue-600">Summer Collection</a>
      <a className="mr-5 hover:text-blue-600">Winter Collection</a>
      <a className="mr-5 hover:text-blue-600">New Arrivals</a>
      <a className="mr-5 hover:text-blue-600">12.12 Sale</a>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 rounded text-base mt-4 md:mt-0">Shop Now
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    </div>
  )
}

export default Navbar
