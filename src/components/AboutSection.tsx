import { assets } from "../assets/assets"

const AboutSection = () => {
  return (
    <div id="about" className='flex items-center justify-center'>
      <div className="p-10 max-w-7xl text-center mx-10 md:mx-25 space-y-3">
        <h1 className='text-5xl font-bold'>About <span className='font-light'>Me</span></h1>
        <h2 className='text-2xl'>SubTitle About Section</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur tempore cupiditate corrupti magnam qui, 
          optio pariatur fugiat vel repellendus animi distinctio. Provident minus architecto eveniet, accusamus eos assumenda id?
        </p>
        <div className="flex items-center justify-center gap-6 pt-10 overflow-hidden">
          <div className="flex-col">
            <img src={assets.profile_img} className="max-h-90" alt="Profile_Image" />
          </div>
          <div className="flex-col space-y-3">
            <div className="card bg-gradient-to-r from-slate-500/50 to-slate-500/0 w-full">
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div> */}
              </div>
            </div>
            
            <div className="card bg-gradient-to-r from-slate-500/50 to-slate-500/0 w-full">
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div> */}
              </div>
            </div>

            <div className="card bg-gradient-to-r from-slate-500/50 to-slate-500/0 w-full">
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection