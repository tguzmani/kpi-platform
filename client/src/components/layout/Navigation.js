import {
  List,
  Paper,
  Collapse,
  Typography,
  IconButton,
  Grid,
  Box,
} from '@mui/material'
import React from 'react'
import NavItem from './NavItem'
import useResponsive from './../../hooks/useResponsive'
import MenuIcon from '@mui/icons-material/Menu'

const Navigation = () => {
  const links = [
    { name: 'Grupos de reporte', to: '/admins/reports-groups' },
    { name: 'Reportes', to: '/admins/show-report' },
    { name: 'Grupos de usuario', to: '/admins/user-groups' },
    { name: 'Usuarios', to: '/admins/users' },
    { name: 'Cuenta', to: '/admins/account' },
  ]

  const [open, setOpen] = React.useState(false)

  const navigationItems = (
    <List>
      {links.map(link => (
        <NavItem key={link.to} to={link.to} onClick={() => setOpen(false)}>
          <Typography variant='body1'>{link.name}</Typography>
        </NavItem>
      ))}
    </List>
  )

  const matchLg = useResponsive('md')

  return (
    <>
      {matchLg ? (
        <Paper className='navigation'>{navigationItems}</Paper>
      ) : (
        <>
          <Paper className='navigation-mobile'>
            <Grid container alignItems='center' justifyContent='space-between'>
              <Grid item xs={10}>
                <Typography align='center' variant='body2'>
                  Navegación
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <IconButton onClick={() => setOpen(!open)}>
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Collapse in={open} timeout='auto' unmountOnExit>
              <Box
                sx={{
                  padding: '20px',
                }}
              >
                {navigationItems}
              </Box>
            </Collapse>
          </Paper>
        </>
      )}
    </>
  )
}

export default Navigation
