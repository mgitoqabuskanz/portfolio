import { useState } from 'react'
import '../index.css'
import { mywork_data } from "../assets/assets";

const ProjectSection = () => {
  const [showAll, setshowAll] = useState(false);
  const toggleshowAll = () => {
    setshowAll(!showAll);
  };
  return (
    <div id='project' className='flex items-center justify-center'>
      <div className="p-10 max-w-7xl text-center mx-10 md:mx-25 space-y-3">
        <h1 className='text-5xl font-bold w-full'><span className='font-light'>My</span> Project</h1>
        <h2 className='text-2xl w-full'>SubTitle About Section</h2>
        <p className="w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur tempore cupiditate corrupti magnam qui, 
          optio pariatur fugiat vel repellendus animi distinctio. Provident minus architecto eveniet, accusamus eos assumenda id?
        </p>
        <div className="flex justify-between mt-10">
          <div className="w-80 items-start">
            <label className="input">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
              <input type="search" required placeholder="Search"/>
            </label>
          </div>
          <div className="w-80 items-end">
            <select defaultValue="Pick a color" className="select">
              <option disabled={true}>Pick a color</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {mywork_data.slice(0,showAll ? mywork_data.length : 3).map((work, index) => (
            <a href={work.w_link} className='block'>
              <div key={index} className="card bg-base-100  shadow-sm">
                <figure>
                  <img
                    src={work.w_img}
                    alt={work.w_name} />
                </figure>
                <div className="card-body items-center">
                  <h2 className="card-title">{work.w_name}</h2>
                  <p>
                    {work.w_desc.length > 100 ?
                      `${work.w_desc.substring(0, 100)} (...)` : work.w_desc
                    }
                  </p>
                </div>
              </div>
            </a>
          ))}          
        </div>
        <a role="button" onClick={toggleshowAll} className="btn btn-wide btn-accent mt-10">{showAll ? 'Show Less' : 'Show All'}</a>
      </div>
    </div>  
  )
}

export default ProjectSection