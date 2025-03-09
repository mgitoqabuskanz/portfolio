import { useState } from 'react';
import FormSendEmail from './FormSendEmail';
import FormSendWhatsapp from './FormSendWhatsapp';
import { SiGmail, SiWhatsapp } from 'react-icons/si';
import './style.css'

const FormMessage = () => {
  const [isEmail, setIsEmail] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleToggle = () => {
    setIsEmail(!isEmail);
    setIsDisabled(!isEmail);
  };
  return (
    <>
      <div className="form-container w-full justify-center">
        <div className="form-toggler relative w-232 h-10 rounded-lg overflow-hidden bg-transparent border-transparent">

          <button 
            className={`btn ${isDisabled ? 'btn-disabled -right-133 translate-x-75 text-error' : 'right-75 translate-x-75 btn btn-error text-white z-1'} absolute w-220 duration-1000 transition-all overflow-hidden`}
            disabled={isDisabled}
            onClick={handleToggle}
            >
            {!isEmail ? (
              <span className='pr-15'>
                Send message from GMail? <SiGmail className='left-0 top-0 m-3 absolute'/>
              </span>
            ) : (
              <span>
                <SiGmail className='left-0 top-0 m-3 ml-4 absolute'/>
              </span>
            )}
          </button>

          <button 
            className={`btn ${!isDisabled ? 'btn-disabled -left-133 -translate-x-75 text-success' : 'left-75 -translate-x-75 btn btn-success text-white z-1'} absolute w-220 duration-1000 transition-all overflow-hidden`}
            disabled={!isDisabled}
            onClick={handleToggle}
            >
            {!isEmail ? (
              <span>
                <SiWhatsapp className='right-0 top-0 m-3 mr-4 absolute' />
              </span>
            ) : (
              <span className='pl-15'>
                Send message from WhatsApp? <SiWhatsapp className='right-0 top-0 m-3 absolute'/>
              </span>
            )}
          </button>

        </div>
        
        <div className="form-control relative pt-5">

          {isEmail ? (
            <div className={`form-step relative p-4 bg-base-200 rounded-lg shadow-lg transition-all duration-500 w-full ${isEmail ? 'opacity-100' : 'opacity-0'}`}>
              <FormSendEmail />
            </div>
          ) : (
            <div className={`form-step relative p-4 bg-base-200 rounded-lg shadow-lg transition-all duration-500 w-full ${!isEmail ? 'opacity-100' : 'opacity-0'}`}>
              <FormSendWhatsapp />
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default FormMessage