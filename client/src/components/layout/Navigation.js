import { List, Card, CardContent } from '@mui/material'
import React from 'react'
import NavItem from './NavItem'

const Navigation = () => {
  const links = [
    { name: 'Grupos de reporte', to: '/' },
    { name: 'Usuarios', to: '/users' },
    { name: 'Reportes', to: '/reports' },
    { name: 'Cuenta', to: '/account' },
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
