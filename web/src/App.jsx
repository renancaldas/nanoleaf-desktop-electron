import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { useDispatch } from "react-redux";
import Container from "./app/Container";

import socket from "./api/socketio";

const App = (props) => {
  const [selectedRoute, setRoute] = useState(window.location.pathname); // rendering twice
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(":: App :: props: ", props);

    socket.on("dispatch", ({ action, payload }) => {
      console.log(`:: App | dispatch | ${action} :: `, payload);
      dispatch({ type: action, payload });
    });
  }, [dispatch, props]);

  const onChangeRoute = (route) => {
    setRoute(route);
  };

  return (
    <BrowserRouter>
      <Container selectedRoute={selectedRoute} setRoute={onChangeRoute} />
    </BrowserRouter>
  );
};

export default App;
