import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    height: "100%",
    backgroundColor: "#282c34",
  },
});

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>About</div>

      <Button variant="contained" color="primary" onClick={() => alert("yay")}>
        Hello World
      </Button>
    </div>
  );
};

export default About;