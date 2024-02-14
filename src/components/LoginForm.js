import React, { useState } from 'react';
import "../styles/LoginForm.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [accountNumber, setAccountNumber] = useState('');
  const [pin, setPin] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('')


  const handleExit = () => {
    navigate('/');
  };

  const handleOkRegister = async (event) => {
    event.preventDefault();
    navigate('/registration');
  };

  const handleOk = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        accountNumber,
        pin,
      });
  
      const token = response.data.token;
      localStorage.setItem('token', token);
  
      setIsLoggedIn(true);

      navigate('/services');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error('Login failed:', error.response.data.message);
        setMessage('Please register first to login.')
        setTimeout(() => setMessage(''), 5000);
        // alert('please register to login.');
      } else {
      console.error('Login failed:', error.message);
      }
    }
  };



  return (
    <div className='login'>
      <div className='login-form'>
      <h2>Login to M-Bank</h2>

      {isLoggedIn ? (
        <div>
          <p>You are logged in!</p>
        </div>
      ) : (
    

      <form>
        <div className='label-1'>
        <label htmlFor='accountNumber'>A/C No:</label>
        <input type='text' id='accountNumber' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)}/>
        </div>
        
        <div className='label-2'>
        <label htmlFor='pin'>PIN:</label>
        <input type='password' id='pin' value={pin} onChange={(e) => setPin(e.target.value)}/>
        </div>

        {message && (
        <div style={{ color: 'green', fontSize: '20px' }}>
          {message}
          </div>
      )}

        <div className='button'> 
        <button type='submit' className='btn-sub' onClick={handleOkRegister}>Register</button>
        <button type='button' onClick={handleOk}>OK</button>
        </div>
        
        <button type='button' className='btn' onClick={handleExit}>Exit</button>
      </form>

      
        )}
    </div>
    </div>
  );
};

export default LoginForm;
