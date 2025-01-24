import { Github, Linkedin, LinkedinIcon, LucideLinkedin, Mail, Phone } from 'lucide-react'
import React from 'react'
import Img from '../assets/Image/ad.jpg'
const Profile = () => {
  return (
    <div className='h-full w-full bg-black flex  flex-col items-center'>
      <div className='h-[80%] w-[80%] flex justify-center items-center m-10'>
            <div className='h-full w-full flex flex-col justify-center ml-6'>
                <div className=' text-white w-[60%] h-[10%] my-5 font-extralight text-5xl span'>Hi! I'm <span className='text-yellow-400'>Akshay</span> </div>
                {/* <div className=' text-teal-800 w-[60%] h-[10%] my-5 font-extralight text-5xl '>Akshay</div> */}
                <div className=' w-[80%]  text-white h-[20%] my-5 font-thin text-3xl'>I am a Computer Science Engineering student with a passion for Python language, web development and AI. I've worked on diverse projects, including AI-based YouTube, Website, PDF summarizers and Telegram bots. Have intern experience in Bikal.AI and Hash Agile Technologies. </div>
            </div>
            <div className='h-full w-full flex justify-center items-center'>
                <div className='h-[40%] w-[60%]  rounded-full'><img src={Img} className='rounded-full'></img></div>
            </div>
            
      </div>
        <div className='h-screen w-[40%]  flex justify-around items-center'>
          <div><a href="mailto:jsakshaykarthik@gmail.com"><Mail className='text-white h-10 w-10' /></a></div>
          <div><a href="https://www.linkedin.com/in/akshay-karthik-s-041a26253/?originalSubdomain=in" target="_blank"><Linkedin className='text-white h-10 w-10' /></a></div>
          <div><a href="https://github.com/Akshaykarthik22" target="_blank"><Github className='text-white h-10 w-10'/></a></div>
          <div><a href="tel:+917010160414"><Phone className='text-white h-10 w-10'/></a></div>
        </div>
    </div>
  )
}
export default Profile