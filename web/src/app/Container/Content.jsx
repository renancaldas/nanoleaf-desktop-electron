import React from "react";
import { Switch, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { makeStyles } from "@material-ui/core/styles";

import routes from "../../constants/routes";

const useStyles = makeStyles({
  container: {
    height: props => props.isFullscreen ? '100vh' : 'calc(100vh - 56px)',
  },
});

const Content = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.container}>
      <Switch>
        {routes.map((route) => {
          return (
            <Route exact path={route.path} key={uuid()}>
              {route.component}
            </Route>
          );
        })}
      </Switch>
    </div>
  );
};

export default Content;
