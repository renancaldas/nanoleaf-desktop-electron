import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { AlphaPicker } from "react-color";

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  leftIcon: {
    width: 15,
    height: 15,
  },
});

const getColorObject = (hue, saturation) => {
  return { h: hue, s: 1, l: 0.5, a: saturation / 100 };
};

const ColorSaturation = ({ title, onChange, hue, saturation }) => {
  const classes = useStyles();
  const [saturationState, setSaturationState] = React.useState(
    getColorObject(hue, saturation)
  );

  React.useEffect(() => {
    setSaturationState(getColorObject(hue, saturation));
  }, [hue, saturation]);

  const onChangeStateSaturation = (color, event) => {
    setSaturationState(color.hsl);
  };

  const onChangeSaturation = (color, event) => {
    setSaturationState(color.hsl);
    onChange(parseInt(color.hsl.a * 100));
  };

  return (
    <div>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {title}
      </Typography>
      <AlphaPicker
        width="100%"
        onChange={onChangeStateSaturation}
        onChangeComplete={onChangeSaturation}
        color={saturationState}
      />
    </div>
  );
};

export default ColorSaturation;
