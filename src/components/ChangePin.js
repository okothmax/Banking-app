import React from 'react';
import "../styles/ChangePin.css";
import Logo from "../images/logo rm.png";
import { useNavigate } from 'react-router-dom';
const ChangePin = () => {
  const navigate = useNavigate();

  const handleChangePIN = () => {
    navigate('/services')
  }

  return (
  <div className='change'>
  <div className='change-form'>
  <img src={Logo} alt='logo' />
    <h2>Change PIN</h2>

    <form>
         <div className='label-6'>
          <label htmlFor='pin'>Old PIN</label>
          <input type='password' id='pin' />
          </div>
         
         <div className='label-1'>
          <label htmlFor='pin'>New PIN</label>
          <input type='password' id='pin' />
         </div>

         <div className='label-1'>
          <label htmlFor=''>New PIN</label>
          <input type='password' id='pin' />
        </div>

          <div className='change-btn'>
          <button type='button' onClick={handleChangePIN}>Back</button>
          <button type='submit'>OK</button>
          </div>
        </form>

  </div>
  
</div>
)
}

export default ChangePin;
