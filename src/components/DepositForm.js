import React, { useState } from 'react';
import "../styles/DepositForm.css";
import { useNavigate } from 'react-router-dom';
import Logo from "../images/logo rm.png";


const DepositForm = ({ updateBalance }) => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [depositMessage, setDepositMessage] = useState('');

  const handleDepositBack = () => {
    navigate('/services');
  };

  const handleDepositOk = (e) => {
    e.preventDefault();
    const depositAmount = parseFloat(amount);

    if (!isNaN(depositAmount) && depositAmount > 0) {
      const message = `You have succesfully deposited ksh ${depositAmount} to your Account.`;
      setDepositMessage(message);
      setAmount('');
      setTimeout(() => { setDepositMessage('');
      window.location.reload();
    }, 2000);
    } 
  };

  // const handleDepositOk = (e) => {
  //   e.preventDefault();
  //   const depositAmount = parseFloat(amount);
  //   if (!isNaN(depositAmount) && depositAmount > 0) {
  //     updateBalance(depositAmount);
  //     setDepositMessage(`You have deposited Ksh ${depositAmount} to your account.`);
  //     setTimeout(() => {
  //       setDepositMessage('');
  //       // Clear the input field
  //       setAmount('');
  //     }, 5000);
  //   }
  // };
  


  return (
    <div className='deposit'>
      <div className='deposit-form'>
      <img src={Logo} alt='logo' />
        <h2>Deposit</h2>

        <form>
          <div className='amount-label'>
          <label htmlFor='amount'>Amount:</label> 
          <input type='number' id='amount' value={amount} onChange={(e) => setAmount(e.target.value)}/>
          </div>

          <div className='deposit-btn'>
          <button type='button' onClick={handleDepositBack}>Back</button>
          <button type='submit' onClick={handleDepositOk}>OK</button>
          </div>
        </form>

        {depositMessage && (
          <div className='deposit-message'>
            <p>{depositMessage}</p>
          </div>
        )}

       {/* {depositMessage && (
          <div style={{ color: 'green', fontSize: '20px' }}>
            {depositMessage}
          </div>
        )} */}

      </div>
    </div>
  );
};

export default DepositForm;
