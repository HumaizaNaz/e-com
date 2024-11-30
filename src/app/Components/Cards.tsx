import Image from 'next/image'
import React from 'react'

const Cards = () => {
  return (
    <div className='bg-white ml-24'>
      <section className="text-gray-600 body-font">
  <div  className="container px-5 py-24 mx-auto">
    <div  className="flex flex-wrap -m-4">
      <div  className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a  className="block relative h-48 rounded overflow-hidden">
         <Image src={require("../../../public/image-1.webp")} alt='image-1' width={150} height={220} />
        </a>
        <div  className="mt-4">
          <h3  className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Winter</h2>
          <p  className="mt-1">$70.00</p>
        </div>
      </div>
      <div  className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a  className="block relative h-48 rounded overflow-hidden">
        <Image src={require("../../../public/image-2.webp")} alt='image-2' width={150} height={150} />
        </a>
        <div  className="mt-4">
          <h3  className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2  className="text-gray-900 title-font text-lg font-medium">Winter</h2>
          <p  className="mt-1">$72.15</p>
        </div>
      </div>
      <div  className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a  className="block relative h-48 rounded overflow-hidden">
        <Image src={require("../../../public/image-3.webp")} alt='image-3' width={150} height={150} />
        </a>
        <div  className="mt-4">
          <h3  className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Summer</h2>
          <p  className="mt-1">$84.00</p>
        </div>
      </div>
      <div  className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a  className="block relative h-48 rounded overflow-hidden">
        <Image src={require("../../../public/image-4.webp")} alt='image-4' width={150} height={150} />
        </a>
        <div  className="mt-4">
          <h3  className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2  className="text-gray-900 title-font text-lg font-medium">Summer Lawn</h2>
          <p  className="mt-1">$75.40</p>
        </div>
      </div>
      <div  className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a  className="block relative h-48 rounded overflow-hidden">
        <Image src={require("../../../public/image-5.webp")} alt='image-5' width={150} height={150} />
        </a>
        <div  className="mt-4">
          <h3  className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2  className="text-gray-900 title-font text-lg font-medium">12.12 Sale</h2>
          <p  className="mt-1">$69.00</p>
        </div>
      </div>
      <div  className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image src={require("../../../public/image-6.webp")} alt='image-6' width={150} height={150} />
        </a>
        <div  className="mt-4">
          <h3  className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2  className="text-gray-900 title-font text-lg font-medium">New Arrival</h2>
          <p  className="mt-1">$79.15</p>
        </div>
      </div>
      <div  className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a  className="block relative h-48 rounded overflow-hidden">
        <Image src={require("../../../public/image-7.webp")} alt='image-7' width={150} height={150} />
        </a>
        <div  className="mt-4">
          <h3  className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2  className="text-gray-900 title-font text-lg font-medium">Summer</h2>
          <p  className="mt-1">$82.00</p>
        </div>
      </div>
      <div  className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a  className="block relative h-48 rounded overflow-hidden">
        <Image src={require("../../../public/image-8.webp")} alt='image-8' width={150} height={150} />
        </a>
        <div  className="mt-4">
          <h3  className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2  className="text-gray-900 title-font text-lg font-medium">12.12 Sale</h2>
          <p  className="mt-1">$70.40</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Cards
