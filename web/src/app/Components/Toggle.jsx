import React from 'react';
import Switch from '@material-ui/core/Switch';

const Toggle = ({ isOn, onChange }) => {
  React.useEffect(() => {
    console.log(':: isOn', isOn)
  }, [isOn]);

  const handleChange = (event) => {
    onChange(event.target.checked)
  };

  return (
    <div>
      <Switch
        color="primary"
        checked={isOn}
        onChange={handleChange}
      />
    </div>
  );
}

export default Toggle