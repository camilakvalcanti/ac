import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/navBar';
import NavBar from './components/navBar';

function App() {
  return (
    <div>
      <NavBar navButtons = 'HOME'/>
      <NavBar navButtons = 'ABOUT US'/>
      <NavBar navButtons = 'PRODUCTS'/>
      <NavBar navButtons = 'LOGIN'/>
    </div>
  );
}

export default App;
