import React from 'react';
import './App.css';
import Conversor from './components/Conversor'
import Todolist from './components/Todolist'

function App() {
  return (
    <div className="App">
      <h1>Conversor dólar para real / real para dólar</h1>
      <div className="linha">
        <Conversor moedaA="Dólar" moedaB="Real"/>
        <Conversor moedaA="Real" moedaB="Dólar"/>
      </div>
    </div>
  );
}

export default App;
