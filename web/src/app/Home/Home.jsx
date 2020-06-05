import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Slider from "../Components/Slider";
import Toggle from "../Components/Toggle";
import ColorHue from "../Components/ColorHue";
import ColorSaturation from "../Components/ColorSaturation";
import EffectList from "../Components/EffectList";

import {
  getControllerInfoAction,
  toggleLight,
  setBrightness,
  setHue,
  setSaturation,
  setEffect,
} from "../../redux/actions/Nanoleaf";

import Logo from "../../assets/logo-white.png";

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
  logo: {
    width: "100px",
  },
});

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading, controllerInfo } = useSelector((state) => state.Nanoleaf);

  const isOn =
    controllerInfo && controllerInfo.state.on.value
      ? controllerInfo.state.on.value
      : false;
  const hue =
    controllerInfo && controllerInfo.state.hue.value
      ? controllerInfo.state.hue.value
      : 0;
  const saturation =
    controllerInfo && controllerInfo.state.sat.value
      ? controllerInfo.state.sat.value
      : 0;
  const brightness =
    controllerInfo && controllerInfo.state.brightness.value
      ? controllerInfo.state.brightness.value
      : 0;

  React.useEffect(() => {
    if (!loading && !controllerInfo) {
      dispatch(getControllerInfoAction());
    }
  }, [loading, controllerInfo]);

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

  const onChangeEffect = (value) => {
    console.log("onChangeEffect: ", value);
    dispatch(setEffect(value));
  };

  return (
    controllerInfo && (
      <div className={classes.container}>
        <div className={classes.header}>
          <img src={Logo} className={classes.logo} />

          <Toggle onChange={onToggleLight} isOn={isOn} />
        </div>

        <br />

        <Card raised>
          <CardContent>
            <Slider
              title="Brightness"
              onChange={onChangeBrighness}
              value={brightness}
            />
          </CardContent>
        </Card>

        <br />

        <Card raised>
          <CardContent>
            <ColorHue
              title="Color"
              onChange={onChangeHue}
              hue={hue}
              saturation={saturation}
              brightness={brightness}
            />
          </CardContent>
        </Card>

        <br />

        <Card raised>
          <CardContent>
            <ColorSaturation
              title="Saturation"
              onChange={onChangeSaturation}
              hue={hue}
              saturation={saturation}
            />
          </CardContent>
        </Card>

        <br />

        <Card raised>
          <CardContent>
           
            <EffectList onChange={onChangeEffect} />
          </CardContent>
        </Card>
      </div>
    )
  );
};

export default Home;
