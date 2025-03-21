import { useState, JSX } from 'react'
import '../../index.css'
import project_data, {prj_categories} from '../../assets/project/project_data';
import { SiFirebase, SiGraphql, SiJavascript, SiLaravel, SiMongodb, SiMysql, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { LuSearch } from 'react-icons/lu';

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

  const categoryIcons: Record<string, JSX.Element> = {
    React: <SiReact className="text-blue-500 text-3xl" />,
    "Next.js": <SiNextdotjs className="text-black text-3xl" />,
    Tailwind: <SiTailwindcss className="text-teal-500 text-3xl" />,
    Laravel: <SiLaravel className="text-red-500 text-3xl" />,
    JavaScript: <SiJavascript className="text-yellow-500 text-3xl" />,
    TypeScript: <SiTypescript className="text-blue-500 text-3xl" />,
    Firebase: <SiFirebase className="text-yellow-500 text-3xl" />,
    "Framer Motion": <TbBrandFramerMotion className="text-fuchsia-500 text-3xl" />,
    GraphQL: <SiGraphql className="text-fuchsia-500 text-3xl" />,
    MongoDB: <SiMongodb className="text-green-600 text-3xl" />,
    MySQL: <SiMysql className="text-blue-800 text-3xl" />,

  };

  const getCategoryIcons = (categories: string[]) => {
    if (!categories || categories.length === 0) return null;
    return categories.map((category, index) => (
      <div key={index} className="flex items-center tooltip tooltip-bottom" data-tip={category}>
        {categoryIcons[category] || <span>{category}</span>}
      </div>
    ));
  };

  return (
    <div id='project' className='flex items-center justify-center w-full'>
      <div className="p-10 md:w-7xl w-full text-center md:mx-25 space-y-3">
        <h1 className='text-5xl font-bold w-full text-accent'><span className='font-light text-base-content'>My</span> Project</h1>
        <h2 className='text-2xl w-full font-black'>Showcasing My Expertise Through Real-World Solutions</h2>
        <p className="w-full text-base-content/65">
          Here are some of the projects I have worked on, ranging from web applications to mobile solutions. Each project reflects my dedication to crafting innovative, 
          user-friendly, and high-performance digital experiences using modern technologies.
        </p>
        <div className="flex justify-center mt-10">
          <div className="join">
            <div>
              <input 
              className="input join-item md:w-100 border-base-content" 
              placeholder="Search" 
              value={searchQuery}
              onChange={handleSearchChange}/>
            </div>
            <select className="select join-item border-base-content w-5 px-5 md:w-full" onChange={handleFilterChange} value={selectedFilter}>
              <option value="" className='block sm:hidden'>Filter</option>
              {prj_categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <div className="indicator">
              <button className="btn join-item border-base-content hidden md:block">Search</button>
              <button className="btn join-item border-base-content block md:hidden"><LuSearch /></button>
            </div>
          </div>
        </div>
        <div className="inline-block w-full md:grid md:grid-cols-3 gap-4 space-y-4 md:space-y-0">
          {filteredProjects.slice(0, showAll ? filteredProjects.length : 3).map((work, index) => (
            <a href={work.w_link} className='block hover:scale-125 transition-all duration-500 hover:z-1' key={index}>
              <div className="card border-3 border-base-content/50 bg-base-content/50 backdrop-blur-xl shadow-sm">
                <figure>
                  <img
                    src={work.w_img}
                    alt={work.w_name} />
                </figure>
                <div className="card-body items-center">
                  <h2 className="card-title text-accent font-black">{work.w_name}</h2>
                  <p className='text-base-content/65'>
                    {work.w_desc.length > 80 ?
                      `${work.w_desc.substring(0, 80)} (...)` : work.w_desc
                    }
                  </p>
                  <p className="flex gap-2 items-center bg-white/15 p-2 rounded-full mt-3">{getCategoryIcons(work.w_category)}</p>
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