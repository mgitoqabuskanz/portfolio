import { assets } from '../../assets/assets'
import PdfThumbnail from './PdfThumbnail'
import React from 'react'

const ResumeSection: React.FC = () => {
  return (
    <div id='resume' className='flex items-center justify-center max-w-screen m-0'>
      <div className="md:flex flex-row p-10 max-w-7xl text-center md:text-start md:mx-25 space-y-3 w-full">
        <div className="inline-block space-y-4 p-10">
          <h1 className='text-5xl font-bold text-accent'><span className='font-light text-base-content'>My</span> Resume</h1>
          <h2 className='text-xl font-black mt-5'>A Snapshot of My Skills, Experience, and Achievements</h2>
          <p className='mt-10 text-base-content/65'>
            Explore my professional journey, including my education, work experience, and technical expertise. 
            Download my resume to learn more about how my skills and experience align with your needs.
          </p>
          <a role='button'href={assets.resume} download className="btn btn-accent btn-wide mt-10">Download Resume</a>
        </div>
        <div className="flex-col p-10 bg-success-content rounded-4xl">
          <PdfThumbnail file={assets.resume} />
        </div>

      </div>
    </div>
  )
}

export default ResumeSection