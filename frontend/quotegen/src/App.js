import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuoteBox from './components/quoteBox';
import SolCount from './components/solCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SolCount />
        <QuoteBox />
      </header>
    </div>
  );
}

export default App;
