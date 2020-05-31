import React from 'react';
import logo from './logo.svg';
import './Home.css';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Home
        </p>
        
        <Button variant="contained" color="primary" onClick={() => alert('yay')}>
          Hello World
        </Button>
      </header>
    </div>
  );
}

export default App;
