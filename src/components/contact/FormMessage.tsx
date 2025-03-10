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
        <div className="form-toggler relative w-74 md:w-280 h-10 rounded-lg bg-transparent overflow-hidden border-transparent">

          <button 
            className={`btn ${isDisabled ? 'btn-disabled md:-right-213 -right-12 text-error' : 'md:right-43 right-38 btn btn-error text-white z-1'} absolute translate-x-50 w-74 md:w-275 duration-1000 transition-all overflow-hidden`}
            disabled={isDisabled}
            onClick={handleToggle}
            >
            {!isEmail ? (
              <span className='md:pr-15 pr-25'>
                Send E-Mail? <SiGmail className='left-0 top-0 m-3 absolute'/>
              </span>
            ) : (
              <span>
                <SiGmail className='left-0 top-0 m-3 ml-4 absolute'/>
              </span>
            )}
          </button>

          <button 
            className={`btn ${!isDisabled ? 'btn-disabled md:-left-213 -left-12 text-success' : 'md:left-43 left-38 btn btn-success text-white z-1'} absolute -translate-x-50 w-74 md:w-275 duration-1000 transition-all overflow-hidden`}
            disabled={!isDisabled}
            onClick={handleToggle}
            >
            {!isEmail ? (
              <span>
                <SiWhatsapp className='right-0 top-0 m-3 mr-4 absolute' />
              </span>
            ) : (
              <span className='md:pl-15 pl-23'>
                Send WhatsApp? <SiWhatsapp className='right-0 top-0 m-3 absolute'/>
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