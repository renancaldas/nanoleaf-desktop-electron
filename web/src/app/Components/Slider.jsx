import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import BrightnessLow from "@material-ui/icons/BrightnessLow";
import BrightnessHigh from "@material-ui/icons/BrightnessHigh";

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

const SliderComponent = ({ title = "Title", initialValue = 0, onChange }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(initialValue);

  const handleChange = (event, newValue) => {
    if (value !== newValue) {
      setValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <div>
      <Typography
        className={classes.title}
        color="textSecondary"
        gutterBottom
      >
        {title}
      </Typography>
      <Grid container spacing={2}>
        <Grid className={classes.center} item>
          <BrightnessLow className={classes.leftIcon} />
        </Grid>
        <Grid className={classes.center} item xs>
          <Slider
            marks
            value={value}
            onChange={handleChange}
            step={10}
            min={0}
            max={100}
          />
        </Grid>
        <Grid className={classes.center} item>
          <BrightnessHigh />
        </Grid>
      </Grid>
    </div>
  );
};

export default SliderComponent;
