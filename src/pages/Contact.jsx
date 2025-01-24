import React from 'react'
import { Github, Linkedin, LinkedinIcon, LucideLinkedin, Mail, Phone } from 'lucide-react'


const Contact = () => {
  return (

  
    <div className='h-full w-full bg-black flex flex-col items-center text-center justify-center'>
          <div className='font-extralight text-yellow-400 text-slate-50 flex-row  text-6xl items-center hover:text-yellow-600'><h1>CONTACT</h1></div>
      <div className='h-[40%] w-[80%]  border-white flex justify-center items-center'>

          <div className='h-full w-full flex justify-center items-center'><a href="mailto:jsakshaykarthik@gmail.com"><Mail className=' text-white h-[150%] w-[150%] hover:animate-bounce hover:text-red-600' />MAIL</a></div>
          <div className='h-full w-full flex justify-center items-center'><a href="https://www.linkedin.com/in/akshay-karthik-s-041a26253/?originalSubdomain=in" target="_blank"><Linkedin className='text-white h-[100%] w-[100%] hover:animate-bounce hover:text-blue-700' />LINKEDIN</a></div>
          <div className='h-full w-full flex justify-center items-center'><a href="tel:+917010160414"><Phone className='text-white h-[120%] w-[120%]  hover:animate-bounce hover:text-green-700'/>PHONE</a></div>
      </div>
      </div>
     

      
    


        )
}

export default Contact