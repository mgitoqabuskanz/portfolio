import { useState } from 'react';
import FormSendEmail from './FormSendEmail';
import FormSendWhatsapp from './FormSendWhatsapp';
import { SiGmail, SiWhatsapp } from 'react-icons/si';
import './style.css'

const FormMessage = () => {
  const [isEmail, setIsEmail] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleToggle = () => {
    setIsEmail(!isEmail);
    setIsDisabled(!isEmail);
  };
  return (
    <>
      <div className="form-container">
        <button 
          className={`btn ${isDisabled ? 'btn-disabled border border-error text-error z-1 relative right-0 w-10 overflow-hidden' : 'border border-error text-error w-200 relative z-0 left-0 overflow-hidden'} overflow-hidden mb-6 shadow-2xl ease-in-out duration-1000  transition-all`}
          disabled={isDisabled}
          onClick={handleToggle}
        >
          {!isEmail ? (
            <span>
              Send message from GMail? <SiGmail className='absolute left-0 top-0 m-3 overflow-hidden'/>
            </span>
          ) : (
            <span>
              <SiGmail className='absolute left-0 top-0 m-3 overflow-hidden'/>
            </span>
          )}
        </button>

        <button 
          className={`btn ${!isDisabled ? 'btn-disabled border border-success text-success z-1 relative left-0 w-10 overflow-hidden' : 'border border-success text-success w-200 relative z-0 right-0 overflow-hidden'} overflow-hidden mb-6 shadow-2xl ease-in-out duration-1000 transition-all`}
          disabled={!isDisabled}
          onClick={handleToggle}
        >
          {!isEmail ? (
            <span>
              <SiWhatsapp className='absolute right-0 top-0 m-3 overflow-hidden' />
            </span>
          ) : (
            <span>
              Send message from WhatsApp? <SiWhatsapp className='absolute right-0 top-0 m-3 overflow-hidden'/>
            </span>
          )}
        </button>

        {isEmail ? (
          <div className={`form-step p-4 bg-base-200 rounded-lg shadow-lg transition-all duration-500 w-full ${isEmail ? 'opacity-100' : 'opacity-0'}`}>
            <FormSendEmail />
          </div>
        ) : (
          <div className={`form-step p-4 bg-base-200 rounded-lg shadow-lg transition-all duration-500 w-full ${!isEmail ? 'opacity-100' : 'opacity-0'}`}>
            <FormSendWhatsapp />
          </div>
        )}
      </div>
    </>
  );
};

export default FormMessage