import { List, Card, CardContent } from '@mui/material'
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
              {link.name}
            </NavItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

export default Navigation
