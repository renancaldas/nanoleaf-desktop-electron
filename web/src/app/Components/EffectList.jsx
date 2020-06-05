import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { v4 as uuid } from "uuid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import effectList from "../../constants/effectList";

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  select: {
    width: "100%",
  },
});

const EffectList = ({ onChange }) => {
  const classes = useStyles();
  const [effect, setEffect] = React.useState(effectList[0]);

  const onChangeEffect = (event) => {
    setEffect(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Effect
      </Typography>
      <Select
        value={effect}
        onChange={onChangeEffect}
        className={classes.select}
      >
        {effectList.map((item) => (
          <MenuItem key={uuid()} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default EffectList;
