import React from 'react';
import './App.css';
import Conversor from './components/Conversor'

function App() {
  return (
    <div className="App">
      <h1>Conversor USD para BRL / BRL para USD</h1>
      <div className="linha">
        <Conversor moedaA="USD" moedaB="BRL"/>
        <Conversor moedaA="BRL" moedaB="USD"/>
      </div>
    </div>
  );
}

export default App;
