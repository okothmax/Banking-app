import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import "./App.css"
import UserForm from './components/UserForm';
import MbankServices from './components/MbankServices';
import DepositForm from './components/DepositForm';
import ChequeForm from './components/ChequeForm';
import BalanceEnq from './components/BalanceEnq';
import ChangePin from './components/ChangePin';
import FinancialTips from './components/FinancialTips';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/registration" element={<UserForm />} />
          <Route path="/services" element={<MbankServices />} />
          <Route path="/deposit" element={<DepositForm/>} />
          <Route path="/cheque" element={<ChequeForm/>} />
          <Route path="/balance" element={<BalanceEnq/>} />
          <Route path="/change" element={<ChangePin/>} />
          <Route path="/finance" element={<FinancialTips/>} />
          
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
