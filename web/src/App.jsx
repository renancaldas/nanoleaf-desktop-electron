import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";

import Container from './app/Container';

import socketio from './api/socketio';

const App = (props) => {
  const [selectedRoute, setRoute] = useState(window.location.pathname);

  console.log(':: App :: props: ', props);

  const onChangeRoute = (route) => {
    setRoute(route)
  }

  return (
    <BrowserRouter>
      <Container
        selectedRoute={selectedRoute}
        setRoute={onChangeRoute}
      />
    </BrowserRouter>
  );
}

export default App;
