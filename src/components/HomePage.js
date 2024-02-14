import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/HomePage.css";
import Logo from "../images/logo rm.png";

const HomePage = () => {
  return (
    <div className='home-page'>
      <div className='home'>
        <img src={Logo} alt='logo' />
      <h1>M-Banking Application</h1>
      <h3>Banking Made Easy</h3>
      <p>Perform a variety of banking transactions <br /> directly from your smart phone</p>
      <Link to='/login'>Login to M-Bank</Link>
    </div>
    </div>
  )
}

export default HomePage;
