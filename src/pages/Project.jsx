

// import React from 'react'
// import { Github } from 'lucide-react'

// const Project = () => {
//   return ( 
//     <div className='h-screen w-screen bg-black text-white flex flex-col items-center justify-center'>
//       <div className='flex flex-col md:flex-row justify-center items-center gap-16'>
//         {/* Project 1 */}
//         <div className='flex flex-col items-center'>
//           <div className='h-80 w-80 bg-gray-500 flex items-center justify-center text-center rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-transform duration-300'>
//             <img 
//               src='https://images.unsplash.com/photo-1511140973288-19bf21d7e771?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//               alt='Project 1' 
//               className='h-full w-full object-cover'
//             />
//           </div>
//           <p className='text-xl mt-4 text-white font-semibold'>Student's File Manager</p>
//           <p className='text-center mt-2 text-gray-400 text-lg font-light leading-relaxed'>
//             A tool for students to organize and manage their academic files efficiently. 
//             Features include categorizing documents, searching files, and cloud integration 
//             for easy access from any device.
//           </p>
//         </div>

//         {/* Project 2 */}
//         <div className='flex flex-col items-center'>
//           <div className='h-80 w-80 bg-gray-500 flex items-center justify-center text-center rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-transform duration-300'>
//             <img 
//               src='https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//               alt='Project 2' 
//               className='h-full w-full object-cover'
//             />
//           </div>
//           <p className='text-xl mt-4 text-white font-semibold'>Weather Forecaster</p>
//           <p className='text-center mt-2 text-gray-400 text-lg font-light leading-relaxed'>
//             A web application that provides real-time weather updates. 
//             Users can enter a location and receive weather conditions, 
//             temperature forecasts, and more, all powered by OpenWeatherMap API.
//           </p>
//         </div>

//         {/* Project 3 */}
//         <div className='flex flex-col items-center'>
//           <div className='h-80 w-80 bg-gray-500 flex items-center justify-center text-center rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-transform duration-300'>
//             <img 
//               src='https://images.unsplash.com/photo-1517873569652-f231d7134909?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//               alt='Project 3' 
//               className='h-full w-full object-cover'
//             />
//           </div>
//           <p className='text-xl mt-4 text-white font-semibold'>Gesture Detected Mouse Control</p>
//           <p className='text-center mt-2 text-gray-400 text-lg font-light leading-relaxed'>
//             A Python-based application that allows users to control their mouse 
//             movements using hand gestures. Implemented using OpenCV and Mediapipe, 
//             it provides a seamless hands-free computing experience.
//           </p>
//         </div>

//         {/* Project 4 */}
//         <div className='flex flex-col items-center'>
//           <div className='h-80 w-80 bg-gray-500 flex items-center justify-center text-center rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-transform duration-300'>
//             <img 
//               src='https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
//               alt='Project 4' 
//               className='h-full w-full object-cover'
//             />
//           </div>
//           <p className='text-xl mt-4 text-white font-semibold'>YouTube Summarizer</p>
//           <p className='text-center mt-2 text-gray-400 text-lg font-light leading-relaxed'>
//             A smart summarizer that extracts and condenses key information from 
//             YouTube videos. Ideal for users who need quick insights from lengthy 
//             videos without watching the full content.
//           </p>
//         </div>
//       </div>

//       <div className='h-[20%] w-full flex justify-center items-center hover:animate-bounce duration-1000'>
//         <a href="https://github.com/Akshaykarthik22" target="_blank">
//           <Github className='text-white h-20 w-20'/>
//         </a>
//       </div>
//     </div>
//   )
// }

// export default Project



import React from 'react'
import { Github } from 'lucide-react'

const Project = () => {
  return (
    <div className='h-full w-screen bg-black text-white flex flex-col items-center   justify-center'>
      {/* Title */}
      <h1 className='text-4xl  text-yellow-400 font-light mb-14  hover:text-yellow-600 '>Projects</h1>
      <div className='flex flex-col md:flex-row justify-center items-center gap-9'>
        {/* Project 1 */}
        <div className='flex flex-col items-center'>
          <div className='h-80 w-80 bg-gray-500 flex items-center justify-center text-center rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-transform duration-300'>
            <img 
              src='https://images.unsplash.com/photo-1511140973288-19bf21d7e771?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Project 1' 
              className='h-full w-full object-cover'
            />
          </div>
          <p className='text-xl mt-4 text-white font-semibold'>Student's File Manager</p>
          <p className='text-center mt-2 text-gray-400 text-lg font-light leading-relaxed'>
            A tool for students to organize and manage their academic files efficiently. 
            Features include categorizing documents, searching files, and cloud integration 
            for easy access from any device.
          </p>
        </div>

        {/* Project 2 */}
        <div className='flex flex-col items-center'>
          <div className='h-80 w-80 bg-gray-500 flex items-center justify-center text-center rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-transform duration-300'>
            <img 
              src='https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Project 2' 
              className='h-full w-full object-cover'
            />
          </div>
          <p className='text-xl mt-4 text-white font-semibold'>Weather Forecaster</p>
          <p className='text-center mt-2 text-gray-400 text-lg font-light leading-relaxed'>
            A web application that provides real-time weather updates. 
            Users can enter a location and receive weather conditions, 
            temperature forecasts, and more, all powered by OpenWeatherMap API.
          </p>
        </div>

        {/* Project 3 */}
        <div className='flex flex-col items-center'>
          <div className='h-80 w-80 bg-gray-500 flex items-center justify-center text-center rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-transform duration-300'>
            <img 
              src='https://images.unsplash.com/photo-1517873569652-f231d7134909?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Project 3' 
              className='h-full w-full object-cover'
            />
          </div>
          <p className='text-xl mt-4 text-white font-semibold'>Gesture Detected Mouse Control</p>
          <p className='text-center mt-2 text-gray-400 text-lg font-light leading-relaxed'>
            An innovative mouse controller system based on hand gestures. 
            This project eliminates the need for traditional hardware and 
            allows users to navigate their computers using hand movements.
          </p>
        </div>

        {/* Project 4 */}
        <div className='flex flex-col items-center'>
          <div className='h-80 w-80 bg-gray-500 flex items-center justify-center text-center rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-transform duration-300'>
            <img 
              src='https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
              alt='Project 4' 
              className='h-full w-full object-cover'
            />
          </div>
          <p className='text-xl mt-4 text-white font-semibold'>WebTube Summarizer</p>
          <p className='text-center mt-2 text-gray-400 text-lg font-light leading-relaxed'>
            This tool automatically generates concise summaries of YouTube videos and long websites. 
            It uses Gemini AI API to extract key points and condense 
            long video content into easy-to-read text summaries and 
            also generate relevant image using pollinations.AI.
          </p>
        </div>
      </div>

      {/* GitHub Icon */}
      <div className='mt-12'>
        <a href="https://github.com/Akshaykarthik22" target="_blank" rel="noopener noreferrer">
          <Github className='h-16 w-20 hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-shadow duration-300' />
        </a>
      </div>
    </div>
  )
}

export default Project
