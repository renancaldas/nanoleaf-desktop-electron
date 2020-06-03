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

const ColorHue = ({ title, onChange, hue, saturation, brightness }) => {
  const classes = useStyles();
  const [hueState, setHueState] = React.useState(hue);

  React.useEffect(() => {
    setHueState(hue);
  }, [hue]);

  const onChangeStateHue = (color, event) => {
    setHueState(color.hsl.h);
  };

  const onChangeHue = (color, event) => {
    setHueState(color.hsl.h);
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
        color={{ h: hueState, s: saturation, l: brightness }}
      />
    </div>
  );
};

export default ColorHue;
