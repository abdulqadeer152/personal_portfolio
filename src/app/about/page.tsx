"use client"
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section id='about'>
    <div className='bg-black h-full w-full mb-8'>
      <h1 className='py-10 text-orange-700 space-x-2 font-extrabold border-orange-600 text-center '>ABOUT US</h1>
       
        <div className='flex justify-between px-5 items-center '>

       <div className='h-[50vh] w-[50%] border-orange-700 text-orange-500 font-medium mt-8 text-center'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quod perferendis 
          repellendus assumenda facilis sit, delectus odio
           illo soluta tempora? Voluptatem similique maxime quae provident eaque doloribus molestias velit.
            Quam?
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui iusto 
            sed nesciunt non quos dolores impedit commodi, 
            neque id eos quod ex a velit, eaque ea officiis pariatur labore saepe!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni non illo, 
            magnam nobis totam. Itaque, dolorum totam aliquam 
            labore nihil assumenda tempora necessitatibus fugiat reiciendis quo, voluptate a. Laboriosam!</p>
        </div>   
        <div className=''>
          <Image
          alt='about-us'
          src={require("../../../public/about.png")}
          />

        </div>
        </div>
    </div>
    </section>
  )
}

export default About