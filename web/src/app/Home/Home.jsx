import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slider from "./Slider";

import { getControllerInfoAction, setBrightness } from "../../redux/actions/Nanoleaf";

const useStyles = makeStyles({
  container: {
    height: "100%",
    backgroundColor: "#282c34",
    padding: "20px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },

  pos: {
    marginBottom: 12,
  },
});

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const controllerInfo = useSelector((state) => state.Nanoleaf.controllerInfo);

  useEffect(() => {
    console.log(">>> controllerInfo", controllerInfo);
  }, [controllerInfo]);

  const onClickButton = () => {
    console.log("Clicked on button");
    dispatch(getControllerInfoAction());
  };

  const onChangeBrighness = (value) => {
    console.log("Brightness: ", value);
    dispatch(setBrightness(value));
  };

  return (
    <div className={classes.container}>
      <Card>
        <CardContent>
          <Typography>Nanoleaf</Typography>
          <br />
          <Slider title="Brightness" onChange={onChangeBrighness} />
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={onClickButton}>
            Dispatch getControllerInfoAction
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Home;
