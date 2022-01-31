import { ListItemButton, styled } from '@mui/material'
import MuiListItemButton from '@mui/material/ListItemButton'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const NavItem = ({ to, children }) => {
  const { pathname } = useLocation()

  const isSelected = pathname === to

  const ListItemButton = styled(MuiListItemButton)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    borderRadius: '0.75rem',
    margin: '0.5rem 0',
    color: 'white',
    '&.Mui-selected': {
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
      },
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  }))

  return (
    <ListItemButton selected={isSelected} component={NavLink} to={to}>
      {children}
    </ListItemButton>
  )
}

export default NavItem
