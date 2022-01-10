import React from 'react'
import CheckIcon from '@mui/icons-material/Check'
import ClearIcon from '@mui/icons-material/Clear'

const ActiveIndicator = ({ active }) => {
  if (active === 1) return <CheckIcon color='success' />

  return <ClearIcon color='error' />
}

export default ActiveIndicator
