import { assets } from '../../assets/assets'
import PdfThumbnail from './PdfThumbnail'
import React from 'react'

const ResumeSection: React.FC = () => {
  return (
    <div id='resume' className='flex items-center justify-center'>
      <div className="flex p-10 max-w-7xl text-center md:text-start mx-10 md:mx-25 space-y-3">
        <div className="flex-col space-y-4 p-10">
          <h1 className='text-5xl font-bold'><span className='font-light'>My</span> Resume</h1>
          <h2 className='text-xl'>A Snapshot of My Skills, Experience, and Achievements</h2>
          <p className='mt-10'>
            Explore my professional journey, including my education, work experience, and technical expertise. 
            Download my resume to learn more about how my skills and experience align with your needs.
          </p>
          <a role='button'href={assets.resume} download className="btn btn-secondary btn-wide mt-10">Download Resume</a>
        </div>
        <div className="flex-col p-10 bg-amber-500 rounded-4xl">
          <PdfThumbnail file={assets.resume} />
        </div>

      </div>
    </div>
  )
}

export default ResumeSection