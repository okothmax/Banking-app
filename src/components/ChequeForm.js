import React from 'react';
import "../styles/ChequeForm.css";
import { useNavigate } from 'react-router-dom';
import Logo from "../images/logo rm.png";

const ChequeForm = () => {
  const navigate = useNavigate();

  const handleChequeBack = () => {
    navigate('/services')
  };

  return (
    <div className='cheque'>
      <div className='cheque-form'>
      <img src={Logo} alt='logo' />
        <h2>Stop Cheque</h2>
        <form>
          <div className='cheque-label'>
          <label htmlFor='chequeNumber'>Cheque No:</label>
          <input type='number' id='chequeNumber' />
          </div>

          <div className='cheque-btn'>
          <button type='button' onClick={handleChequeBack}>Back</button>
          <button type='submit'>OK</button>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default ChequeForm
