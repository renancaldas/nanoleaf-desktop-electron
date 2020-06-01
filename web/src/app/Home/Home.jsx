import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Slider from "../Components/Slider";
import Toggle from "../Components/Toggle";
import ColorHue from "../Components/ColorHue";
import ColorSaturation from "../Components/ColorSaturation";

import {
  getControllerInfoAction,
  toggleLight,
  setBrightness,
  setHue,
  setSaturation
} from "../../redux/actions/Nanoleaf";

const useStyles = makeStyles({
  container: {
    height: "100%",
    backgroundColor: "#282c34",
    padding: "20px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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

  const onToggleLight = (value) => {
    console.log("Toggled light");
    dispatch(toggleLight(value));
  };

  const onChangeBrighness = (value) => {
    console.log("Brightness: ", value);
    dispatch(setBrightness(value));
  };

  const onChangeHue = (value) => {
    console.log("onChangeHue: ", value);
    dispatch(setHue(value));
  };

  const onChangeSaturation = (value) => {
    console.log("onChangeSaturation: ", value);
    dispatch(setSaturation(value));
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Typography color="textPrimary">Nanoleaf</Typography>
        <Toggle onChange={onToggleLight} />
      </div>

      <br />

      <Card raised>
        <CardContent>
          <Slider title="Brightness" onChange={onChangeBrighness} />
        </CardContent>
      </Card>

      <br />

      <Card raised>
        <CardContent>
          <ColorHue title="Color" onChange={onChangeHue}/>
        </CardContent>
      </Card>

      <br />

      <Card raised>
        <CardContent>
          <ColorSaturation title="Saturation" onChange={onChangeSaturation}/>
        </CardContent>
      </Card>

      <br />

      <Button variant="contained" color="secondary" onClick={onClickButton}>
        Dispatch getControllerInfoAction
      </Button>
    </div>
  );
};

export default Home;
