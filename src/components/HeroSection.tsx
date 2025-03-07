import { assets } from '../assets/assets'

const HeroSection = () => {
  return (
    <>
      <div
      id='home'
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${assets.header_img})`,
      }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content flex-col lg:flex-row-reverse lg:backdrop-blur-sm text-white text-center md:text-start">
          <img
            src={assets.profile_img}
            className="max-w-xs rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-light">Hi, i'm <br className='flex lg:hidden' /><span className='font-bold'>Kanz Muhammad</span></h1>
            <p className="py-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem dolores, necessitatibus culpa 
              suscipit aliquid perferendis maxime quod, architecto reiciendis placeat illo delectus esse alias error nam unde 
              officiis quam? Suscipit?
            </p>
            <div className="space-x-3 space-y-3 inline-block md:inline-flex">
              <button className="btn btn-secondary btn-wide">Hire Me</button>
              <button className="btn btn-secondary btn-wide">My Resume</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection