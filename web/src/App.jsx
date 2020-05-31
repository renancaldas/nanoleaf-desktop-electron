import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";

import Content from './app/Container/Content';
import BottomMenu from './app/Container/BottomMenu';

const App = (props) => {
  const [selectedRoute, setRoute] = useState(window.location.pathname);

  console.log(':: App :: props: ', props);

  return (
    <BrowserRouter>
      <Content />
      <BottomMenu
        selectedRoute={selectedRoute}
        setRoute={(route) => setRoute(route)}
      />
    </BrowserRouter>
  );
}

export default App;
