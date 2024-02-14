import React from 'react';
import "../styles/BalanceEnq.css";
import Logo from "../images/logo rm.png";
import { useNavigate } from 'react-router-dom';


const BalanceEnq = ({ depositedAmount }) => {

  const navigate = useNavigate();
  // const [balance, setBalance] = useState(initialBalance)

  const handleBalanceEnquiry = () => {
    navigate('/services')
  };

  return (
    <div className='balance'>
      <div className='balance-form'>
      <img src={Logo} alt='logo' />
        <h2>Balance Enquiry</h2>

        <div>
          <p>A/C No:12345678</p>
          <p>Name: Jane Ovi</p>
          <p>Bal: ksh45000 + Deposited: {depositedAmount}</p>
        </div>

          <div className='balance-btn'>
          <button type='button' onClick={handleBalanceEnquiry}>Back</button>
          <button type='submit'>OK</button>
          </div>
  

      </div>
    </div>
  )
}

export default BalanceEnq;
