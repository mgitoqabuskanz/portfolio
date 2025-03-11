import React from "react"
import { FILE_PATHS, FOOTER_LINKS } from "../../assets/constants"

const FooterSection = () => {
  return (
    <footer className="w-full bg-neutral-content py-8 mb-16 md:mb-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left Section */}
          <div className="flex items-center justify-start space-x-4">
            <img src={FILE_PATHS.LOGO} className="btn-circle w-12 opacity-50" alt="logo.png" />
            <div className="flex-row">
              <h2 className="text-base-content opacity-40 font-black text-3xl">Kanz Muhammad</h2>
              <p className="text-base-content opacity-25 text-md">Full-Stack Developer | IT Enthusiast</p>
            </div>
          </div>
          
          {/* Center Section */}
          <div className="flex text-center gap-8">
            {FOOTER_LINKS.map((link, index) => (
              <a
              key={index}
              href={link.url}
              target={link.target}
              rel={link.rel}
              className="text-base-content opacity-25 hover:opacity-100 text-2xl"
              >
                {React.createElement(link.icon)}
              </a>
            ))}
          </div>
          
          {/* Right Section */}
          <div className="flex justify-end">
            <p className="text-base-content opacity-25">
                 &copy; {new Date().getFullYear()} Kanz Portfolio. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
//     <footer className="flex items-center w-full bg-neutral-400">
//       {/* <div className="flex-col md:flex-row justify-between md:justify-end text-center md:text-start space-y-8 p-10 md:p-0 mb-16 md:mb-0"> */}
//       <div className="flex w-fit">  

//         <div className="flex-row">
//           <h2 className="text-base-content opacity-40 font-black text-3xl">Kanz Muhammad</h2>
//           <p className="text-base-content opacity-25 text-md">Full-Stack Developer | IT Enthusiast</p>
//         </div>

//         <div className="flex gap-8">
//           {FOOTER_LINKS.map((link, index) => (
//             <a
//               key={index}
//               href={link.url}
//               target={link.target}
//               rel={link.rel}
//               className="text-base-content opacity-25 hover:opacity-100 text-2xl"
//             >
//               {React.createElement(link.icon)}
//             </a>
//           ))}
//         </div>

//         <div className="flex">
//           <p className="text-base-content opacity-25">
//             &copy; {new Date().getFullYear()} Kanz Portfolio. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }

export default FooterSection