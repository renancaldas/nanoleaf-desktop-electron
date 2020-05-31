import React from 'react';
import './About.css';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          About
        </p>
        
        <Button variant="contained" color="primary" onClick={() => alert('yay')}>
          Hello World
        </Button>
      </header>
    </div>
  );
}

export default App;
