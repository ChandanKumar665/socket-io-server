import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocketWeather from './components/SocketWeather';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* <SocketWeather/> */}
      <Weather/>
    </div>
  );
}

export default App;
