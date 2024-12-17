import React from 'react'

const VideoTitle = ({title,overview}) => {
    
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h2 className="font-bold text-3xl">{title}</h2>
        <p className="w-1/4 py-6 ">{overview}</p>
        <button className=' bg-white text-black font-bold py-4 px-10 rounded-lg hover:bg-opacity-90'> ▶️ Play</button>
        <button className='mx-4 bg-gray-600 text-white  font-bold py-4  px-6 rounded-lg bg-opacity-55'>❓More Info</button>

    </div>
  )
}

export default VideoTitle