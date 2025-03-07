import { assets } from "../../assets/assets"
import { SiGmail } from "react-icons/si"

const GMailForm = () => {
  return (
    <>
      <label className="tab gap-1">
        <input type="radio" name="ContactTab" />
        <SiGmail />
        GMail
      </label>
      <div className="tab-content bg-base-100 border-base-300 p-6 space-y-4">
        <div className="avatar">
          <div className="w-50 rounded-full">
            <img src={assets.profile_img} />
          </div>
        </div>
        <div className="flex w-full flex-col">
          <div className="divider divider-neutral text-3xl">Muhammad Gito Qabus Kanz</div>
        </div>
        <div className="join">
          <span className="join-item px-3 bg-gray-200 flex items-center">
              <SiGmail className="text-gray-500" />
          </span>
          <a href="https://mail.google.com/mail/u/0/?fs=1&to=mgitoqabuskanz@gmail.com&tf=cm" target="_blank" className="input input-bordered join-item w-60 cursor-pointer">
            mgitoqabuskanz@gmail.com
          </a>
        </div>
        
      </div>
    </>
  )
}

export default GMailForm