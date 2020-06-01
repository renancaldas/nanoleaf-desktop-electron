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

const ColorSaturation = ({ title, onChange }) => {
  const classes = useStyles();
  const [saturation, setSaturation] = React.useState();

  const onChangeStateSaturation = (color, event) => {
    setSaturation(color.hsl);
  };

  const onChangeSaturation = (color, event) => {
    setSaturation(color.hsl);
    onChange(parseInt(color.hsl.a * 100))
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
        color={saturation}
      />
    </div>
  );
};

export default ColorSaturation;
