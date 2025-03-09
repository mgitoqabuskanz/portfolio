import { useState } from 'react'
import '../../index.css'
import project_data, {prj_categories} from '../../assets/project/project_data';

const ProjectSection = () => {
  const [showAll, setshowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  const toggleshowAll = () => {
    setshowAll(!showAll);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

  const filteredProjects = project_data.filter((work) => {
    const matchesSearch = work.w_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          work.w_desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter ? work.w_category.includes(selectedFilter) : true;

    return matchesSearch && matchesFilter;
  });

  function getSingleCategory(w_category: string[]): React.ReactNode {
    return w_category.join(', ');
  }

  return (
    <div id='project' className='flex items-center justify-center'>
      <div className="p-10 max-w-7xl text-center mx-10 md:mx-25 space-y-3">
        <h1 className='text-5xl font-bold w-full'><span className='font-light'>My</span> Project</h1>
        <h2 className='text-2xl w-full'>SubTitle About Section</h2>
        <p className="w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur tempore cupiditate corrupti magnam qui, 
          optio pariatur fugiat vel repellendus animi distinctio. Provident minus architecto eveniet, accusamus eos assumenda id?
        </p>
        <div className="flex justify-center mt-10">
          <div className="join">
            <div>
              <input 
              className="input join-item w-100" 
              placeholder="Search" 
              value={searchQuery}
              onChange={handleSearchChange}/>
            </div>
            <select className="select join-item" onChange={handleFilterChange} value={selectedFilter}>
              <option value="">Filter</option>
              {prj_categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <div className="indicator">
              <button className="btn join-item">Search</button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {filteredProjects.slice(0, showAll ? filteredProjects.length : 3).map((work, index) => (
            <a href={work.w_link} className='block' key={index}>
              <div className="card bg-base-100 shadow-sm">
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
                  <p className="text-gray-500">Category: {getSingleCategory(work.w_category)}</p>
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