import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[17%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-boldl">{title}</h1>
      <p className=" py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className='bg-white text-black px-12 p-4 text-xl rounded-lg hover:bg-opacity-80'> ▶️ Play</button>
        <button className=' mx-2 bg-gray-500 text-black px-12 p-4 text-xl rounded-lg hover:bg-slate-800'> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;