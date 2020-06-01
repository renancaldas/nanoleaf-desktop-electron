import React from 'react';
import Switch from '@material-ui/core/Switch';

const Toggle = ({ onChange }) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    onChange(event.target.checked)
  };

  return (
    <div>
      <Switch
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
}

export default Toggle