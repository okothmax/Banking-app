import React from 'react';
import "../styles/FinancialTips.css";
import Logo from "../images/logo rm.png";
import { useNavigate } from 'react-router-dom';

const FinancialTips = () => {
  const navigate = useNavigate();

  const handleFinanceBack = () => {
    navigate('/services');
  }; 

  return (
    <div className='finance'>
    <div className='finance-form'>
    <img src={Logo} alt='logo' />
      <h2>Financial Tips</h2>

      <button onClick={handleFinanceBack}>Back</button>
  
    </div>
    
  </div>
  )
  }

export default FinancialTips;
