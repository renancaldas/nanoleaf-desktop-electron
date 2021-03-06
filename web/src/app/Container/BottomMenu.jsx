import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuid } from "uuid";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import routes from "../../constants/routes";

const useStyles = makeStyles({
  bottomMenu: {},
});

const BottomMenu = ({ selectedRoute, setRoute }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleRouteChange = (route) => {
    console.log("handleRouteChange: ", route);
    setRoute(route);
    history.push(route);
  };

  return (
    <div className={classes.bottomMenu}>
      <BottomNavigation
        value={selectedRoute}
        onChange={(event, newValue) => handleRouteChange(newValue)}
        showLabels
        className={classes.root}
      >
        {routes
          .filter((route) => route.isDashboardMenu)
          .map((route) => {
            return (
              <BottomNavigationAction
                key={uuid()}
                label={route.label}
                value={route.path}
                icon={route.icon}
              />
            );
          })}
      </BottomNavigation>
    </div>
  );
};

export default BottomMenu;
