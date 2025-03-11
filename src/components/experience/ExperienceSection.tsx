import EducationExperience from "./EducationExperience"
import WorkExperience from "./WorkExperience"

const ExperienceSection = () => {
  return (
    <div id='experience' className='flex items-center justify-center'>
      <div className="p-10 max-w-7xl text-center md:mx-25 space-y-3">
      <h1 className='text-5xl font-bold text-accent'><span className='font-light text-base-content'>My</span> Experience</h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-start items-center justify-center">
            <EducationExperience />
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="divider lg:divider-horizontal p-10"></div>
          </div>
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-end items-center justify-center">
            <WorkExperience />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceSection