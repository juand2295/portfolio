import React from 'react'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'


const Hero = () => {

  const words = ["Full-stack", "JavaScript", "React", "Next.JS" ,  "React Native"];
  const [ text, helper ] = useTypewriter({
        delaySpeed: 1000,
        words,
        loop: false // Infinit
    });
  
  return (
    <div className="h-screen">
      <div className="overlay"></div>
      <video className="fixed top-0 h-full w-full object-cover -z-10 overflow-hidden" 
        src="https://assets.mixkit.co/videos/preview/mixkit-tour-high-above-a-city-at-dusk-41375-large.mp4"
        autoPlay
        loop
        muted
        >  
      </video>
      <div className="">
          <div className='absolute pl-16 md:pl-52 flex flex-col text-white top-60 text-ani'>
            <p className="font-bold text-2xl md:text-xl tracking-wide ml-6">Hello I'm</p>
            <p className="main-text text-5xl md:text-7xl font-bold">Juan David</p>
            <span className='flex font-bold text-lg md:text-xl ml-6'>
              <p className='pr-3'>A</p>
              <span>{text}</span>
              <p className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-300 tracking-widest ">Web Developer</p>
            </span>
            
            <div className="mt-5">
              <a href='#projects' className="text-white hover:bg-orange-600 hover:text-black font-semibold px-6 md:px-8 inline-block outline-none border-none py-2 md:py-3 bg-[hsla(0,0%,100%,.12)] rounded-lg mr-5" type='submit'>My Works</a>
              <a href='#contact' className="text-white hover:bg-orange-600 hover:text-black font-semibold px-6 md:px-8 inline-block outline-none border-none py-2 md:py-3 bg-[hsla(0,0%,100%,.12)] rounded-lg" type='submit'>Contact Me</a>
            </div>

          </div>
          
        </div>
    </div>
  )
}

export default Hero