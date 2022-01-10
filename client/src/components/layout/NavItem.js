import { ListItem } from '@mui/material'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const NavItem = ({ to, children }) => {
  return (
    <ListItem button component={NavLink} to={to}>
      {children}
    </ListItem>
  )
}

export default NavItem
