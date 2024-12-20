"use client"
import Image from 'next/image'
import React from 'react'

const Project = () => {
  return (
    <div id='project'>
      <section className="text-orange-500 body-font bg-black">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-bold title-font mb-4 text-orange-500 border-2 border-orange-500 rounded hover:bg-orange-500 hover:text-white">
        MY PROJECT 
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them.
      </p>
    </div>
    <div className="flex flex-wrap -m-4 justify-between">
      <div className="p-4 lg:w-1/4 md:w-1/2 border-2 border-orange-500 rounded">
        <div className="h-full flex flex-col items-center text-center">
          <Image
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={require("../../../public/pro-1.png")}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-orange-500">
              TO-DO LIST PROJECT 
            </h2>
            <h3 className="text-white mb-3">NEXT-JS</h3>
            <p className="mb-4">
              This is my To-do Project which i create by 
              using Next-Js.
            </p>
             
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2 border-2 border-orange-500 rounded">
        <div className="h-full flex flex-col items-center text-center">
          <Image
            alt="team"
            height={100} 
            width={100}
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={require("../../../public/pro-2.png")}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-orange-500">
              CALCULATOR
            </h2>
            <h3 className="text-white mb-3">HTML CSS TYPESCRIPT</h3>
            <p className="mb-4">
              DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
              vaporware.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/ border-2 border-orange-500 rounded">
        <div className="h-full flex flex-col items-center text-center">
          <Image
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={require("../../../public/pro-3.png")}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-orange-500">
              ATM
            </h2>
            <h3 className="text-white mb-3">HTML CSS TYPESCRIPT</h3>
            <p className="mb-4">
              DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
              vaporware.
            </p>
            
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2 border-2 border-orange-500 rounded">
        <div className="h-full flex flex-col items-center text-center">
          <Image
            alt="team"
            
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={require("../../../public/pro-4.png")}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-orange-500">
              DYNAMIC RESUME BUILDER
            </h2>
            <h3 className="text-white mb-3">NEXT-JS</h3>
            <p className="mb-4">
              DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
              vaporware.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project