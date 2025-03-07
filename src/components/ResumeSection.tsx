import { assets } from '../assets/assets'
import PdfThumbnail from './PdfThumbnail'
import React from 'react'

const ResumeSection: React.FC = () => {
  return (
    <div id='resume' className='flex items-center justify-center'>
      <div className="flex p-10 max-w-7xl text-center md:text-start mx-10 md:mx-25 space-y-3">
        <div className="flex-col space-y-3 p-10">
          <h1 className='text-5xl font-bold'><span className='font-light'>My</span> Resume</h1>
          <h2 className='text-2xl'>SubTitle About Section</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur tempore cupiditate corrupti magnam qui, 
            optio pariatur fugiat vel repellendus animi distinctio. Provident minus architecto eveniet, accusamus eos assumenda id?
          </p>
        </div>
        <div className="flex-col p-10 bg-amber-500">
          <PdfThumbnail file={assets.pdf} />
        </div>

      </div>
    </div>
  )
}

export default ResumeSection