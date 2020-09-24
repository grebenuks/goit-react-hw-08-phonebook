import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function BasicTextFields({ label, handleChange, name, value }) {
  return (
    <TextField
      value={value}
      name={name}
      id="outlined-basic"
      label={label}
      variant="outlined"
      onChange={({ target: { value } }) => handleChange(value)}
    />
  );
}
