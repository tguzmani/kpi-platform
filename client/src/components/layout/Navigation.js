import { List, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import NavItem from './NavItem'

const Navigation = () => {
  const links = [
    { name: 'Grupos de reporte', to: '/admins/reports/groups' },
    { name: 'Usuarios', to: '/admins/users' },
    { name: 'Reportes', to: '/admins/reports' },
    { name: 'Cuenta', to: '/admins/account' },
  ]

  return (
    <Card>
      <CardContent>
        <List>
          {links.map(link => (
            <NavItem key={link.to} to={link.to}>
              <Typography variant='body1'>{link.name}</Typography>
            </NavItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

export default Navigation
