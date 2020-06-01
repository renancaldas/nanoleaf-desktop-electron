import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { v4 as uuid } from "uuid";

import effectList from "../../constants/effectList";

const EffectList = ({ onChange }) => {
  const [effect, setEffect] = React.useState(effectList[0]);

  const onChangeEffect = (event) => {
    setEffect(event.target.value);
    onChange(event.target.value);
  };

  return (
    <Select value={effect} onChange={onChangeEffect}>
      {effectList.map((item) => (
        <MenuItem key={uuid()} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  );
};

export default EffectList;
