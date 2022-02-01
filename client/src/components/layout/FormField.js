import React from 'react'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import MuiTextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'

const TextField = props => (
  <MuiTextField margin='normal' fullWidth variant='outlined' {...props} />
)

const Select = ({ options, optionValue, display, fieldValue, ...props }) => {
  if (!options) return <div>Cargando...</div>

  return (
    <MuiTextField margin='normal' select fullWidth {...props}>
      {options.map(option => (
        <MenuItem key={option.id} value={option[optionValue]}>
          {option[display]}
        </MenuItem>
      ))}
    </MuiTextField>
  )
}

const SelectChecked = ({
  options,
  value,
  display,
  checked,
  fieldValue,
  ...props
}) => (
  <MuiTextField margin='normal' select fullWidth {...props} value={fieldValue}>
    {options.map(option => (
      <MenuItem key={option.id} value={option[value]}>
        <Checkbox checked={checked} />
        <ListItemText>{option[display]}</ListItemText>
      </MenuItem>
    ))}
  </MuiTextField>
)

const FormField = ({ label, children }) => {
  return (
    <>
      <Grid item md={4} xs={12}>
        <Typography variant='accent' align='center'>
          {label}
        </Typography>
      </Grid>
      <Grid item md={8} xs={12}>
        {children}
      </Grid>
    </>
  )
}

FormField.TextField = TextField
FormField.Select = Select
FormField.SelectChecked = SelectChecked

export default FormField
