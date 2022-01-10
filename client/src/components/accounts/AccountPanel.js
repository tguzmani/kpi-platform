import React from 'react'
import { Card, CardContent } from '@mui/material'
import Typography from '@mui/material/Typography'

const AccountPanel = ({ title, children }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h6' align='center' mb={3}>
          {title}
        </Typography>
        {children}
      </CardContent>
    </Card>
  )
}

export default AccountPanel
