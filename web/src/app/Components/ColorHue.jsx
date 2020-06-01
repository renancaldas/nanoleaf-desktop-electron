import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// Circle
import { HuePicker } from "react-color";

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
});

const ColorAlpha = ({ title, onChange }) => {
  const classes = useStyles();
  const [hue, setHue] = React.useState();

  const onChangeStateHue = (color, event) => {
    setHue(color.hex);
  };

  const onChangeHue = (color, event) => {
    setHue(color.hex);
    onChange(parseInt(color.hsl.h))
  };

  return (
    <div>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {title}
      </Typography>
      <HuePicker
        width="100%"
        onChange={onChangeStateHue}
        onChangeComplete={onChangeHue}
        color={hue}
      />
    </div>
  );
};

export default ColorAlpha;
