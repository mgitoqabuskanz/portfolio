import React from 'react'

const HeroSection = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}>
        <div className="hero-overlay"></div>
        <div className="hero-content flex-col lg:flex-row-reverse backdrop-blur-xs text-white text-center md:text-start">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Hero Title</h1>
            <p className="py-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem dolores, necessitatibus culpa 
              suscipit aliquid perferendis maxime quod, architecto reiciendis placeat illo delectus esse alias error nam unde 
              officiis quam? Suscipit?
            </p>
            <button className="btn btn-secondary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection