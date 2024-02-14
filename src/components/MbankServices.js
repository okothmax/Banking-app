import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/MbankServices.css";
import Logo from "../images/logo rm.png";
// import DepositForm from './DepositForm';
// import BalanceEnq from './BalanceEnq';

const MbankServices = ()  => {
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [balance, setBalance] = useState(0);
  const [depositedAmount, setDepositedAmount] = useState(0);


  const handleDeposit = (amount) => {
    setDepositedAmount(amount);
    setBalance((prevBalance) => prevBalance + amount);
    navigate('/deposit')
    console.log('Deposit service clicked');
  };

  const handleBalanceEnquiry = () => {
    // setShowDepositForm(false);
    navigate('/balance')
    console.log('Balance Enquiry service clicked');
  };

  const handleStopCheque = () => {
    navigate('/cheque')
    console.log('Stop Cheque service clicked');
  };

  const handleChangePIN = () => {
    navigate('/change')
    console.log('Change PIN service clicked');
  };

  const handleFinancialTips = () => {
    navigate('/finance')
    console.log('Financial Tips service clicked');
  };

  const handleBack = () => {
    navigate('/login');
  };

  return (
    <div className='services'>
      <div className='mbank-services'>
      <img src={Logo} alt='logo' />
        <h2>M-Bank Services</h2>

        {/* <DepositForm onDeposit={handleDeposit} /> */}
        {depositedAmount > 0 && (
          <p>You have Deposited ksh {depositedAmount} to your account.</p>
        )}
        {/* <BalanceEnq balance={balance} onBalanceEnq={handleBalanceEnquiry} /> */}
        
        {/* {showDepositForm ? (
          <DepositForm updateBalance={(amount) => setBalance((prevBalance) => prevBalance + amount)} />
        ) : (
          <BalanceEnq initialBalance={balance} />
        )} */}
      
      <div className='service-btn'>
        <button type="button" onClick={handleDeposit}>Deposit</button>
        <button type="button" onClick={handleBalanceEnquiry}>Balance Enq</button>
        <button type="button" onClick={handleStopCheque}>Stop Cheque</button>
        <button type="button" onClick={handleChangePIN}>Change PIN</button>
        <button type="button" onClick={handleFinancialTips}>Financial Tips</button>
        <button type="button" onClick={handleBack}>Back</button>
      </div>
      </div>
      
    </div>
  )
}

export default MbankServices;
