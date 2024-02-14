import React, { useState } from 'react';
import "../styles/UserForm.css";
import { useNavigate } from 'react-router-dom';
import Logo from "../images/logo rm.png";
import axios from 'axios';

const UserForm = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState ('');
  const [lastName, setLastName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [pin, setPin] = useState('');



  const handleUserBack = () => {
    navigate(-1);
  };

  const handleOk = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        firstName,
        lastName,
        accountNumber,
        pin,
      });

      if (response && response.data) {
      const token = response.data.token;

      localStorage.setItem('token', token);

    navigate('/login');

  } else {
    // Handle the case where response or response.data is undefined
    console.error('Registration failed: Invalid response');
  }

    } catch (error) {
      console.error('Registration failed', error.response.data.message);
    }
  };


  return (
    <div className='user-form'>
      <div className='register'>
      <img src={Logo} alt='logo' />
        <h2>User Registration</h2>
        <form onSubmit={handleOk}>
        <div className='label-1'>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName"  value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </div>

        <div className='label-4'>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>

        <div className='label-2'>
        <label htmlFor="accountNumber">Account No:</label>
        <input type="text" id="accountNumber" value={accountNumber} onChange={(e) =>setAccountNumber(e.target.value)} />
        </div>

        <div className='label-3'>
        <label htmlFor="pin">PIN:</label>
        <input type="password" id="pin" value={pin} onChange={(e) => setPin(e.target.value)} />
        </div>

        <div className='button'>
        <button type="button" onClick={handleUserBack}>Back</button>
        <button type="submit">OK</button>
        </div>
        </form>
      </div>  
    </div>
  )
}

export default UserForm;
