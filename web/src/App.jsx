import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


import Home from './app/Home/Home';
import About from './app/About/About';
import BottomMenu from './app/Container/BottomMenu';

const useStyles = makeStyles({
  container: {
    height: 'calc(100vh - 56px)',
    border: '1px solid blue'
  }
});

const App = (props) => {
  const classes = useStyles();
  const [selectedRoute, setRoute] = useState('/');

  console.log(':: App :: props: ', props);
  
  return (
    <Router>
      <div className={classes.container}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
      <BottomMenu 
        selectedRoute={selectedRoute} 
        setRoute={(route) => setRoute(route)} 
      />
    </Router>
  );
}

export default App;
