import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import routes from "../../constants/routes";
import Content from "./Content";
import BottomMenu from "./BottomMenu";

const useStyles = makeStyles({
  container: {},
});

const Container = ({ selectedRoute, setRoute }) => {
  const classes = useStyles();

  const isFullscreen = routes.filter(route => route.path === window.location.pathname)[0].isFullscreen;

  return (
    <div className={classes.container}>
      <Content isFullscreen />
      { isFullscreen ? null : <BottomMenu selectedRoute={selectedRoute} setRoute={setRoute} /> }
    </div>
  );
};

export default Container;
