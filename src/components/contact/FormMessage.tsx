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
          className={`btn ${isDisabled ? 'btn-disabled btn-wide z-1 absolute left-0 translate-x-60' : 'relative z-0 -translate-x-34 left-0'} w-3xl mb-6 shadow-2xl ease-in-out duration-1000`}
          disabled={isDisabled}
          onClick={handleToggle}
        >
          Send message from {isEmail ? 'Email' : 'Email'} <SiGmail />
        </button>

        <button 
          className={`btn ${!isDisabled ? 'btn-disabled btn-wide z-1 absolute right-0 -translate-x-60' : 'relative z-0 translate-x-34 right-0'} overflow-hidden w-3xl mb-6 shadow-2xl ease-in-out duration-1000`}
          disabled={!isDisabled}
          onClick={handleToggle}
        >
          Send message from {!isEmail ? 'WhatsApp' : 'WhatsApp'} <SiWhatsapp />
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