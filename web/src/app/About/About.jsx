import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";

import { getConfig } from "../../redux/actions/Nanoleaf";

import Logo from "../../assets/logo-white.png";

const useStyles = makeStyles({
  container: {
    height: "100%",
    backgroundColor: "#282c34",
    padding: "20px",
  },
  logo: {
    width: "100px",
  },
  textfield: {
    width: "100%",
  },
});

const About = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading, config } = useSelector((state) => state.Nanoleaf);

  React.useEffect(() => {
    if (!loading && !config) {
      dispatch(getConfig());
    }
  }, [loading, config]);

  return (
    config && (
      <div className={classes.container}>
        <div className={classes.header}>
          <img src={Logo} className={classes.logo} />
        </div>

        <br />

        <Card raised>
          <CardContent>
            <TextField
              label="IP"
              value={config.ip}
              className={classes.textfield}
            />
          </CardContent>
        </Card>

        <br />

        <Card raised>
          <CardContent>
            <TextField
              label="Token"
              value={config.token}
              className={classes.textfield}
            />
          </CardContent>
        </Card>
      </div>
    )
  );
};

export default About;
