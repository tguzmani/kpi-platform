import React from 'react'

import List from '@mui/material/List'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InvoiceItem from './InvoiceItem'

const Invoices = () => {
  const invoices = [
    {
      id: 1,
      invoiceId: '8052a46b',
      value: '100.000',
      creationDate: '2022-01-13T04:00:00.000Z',
      paymentDate: '2022-01-27T04:00:00.000Z',
      paymentStatus: 'Pagado',
      currencyId: 1,
    },
    {
      id: 2,
      invoiceId: '7b385cf3',
      value: '50.000',
      creationDate: '2022-01-23T04:00:00.000Z',
      paymentDate: '2022-01-26T04:00:00.000Z',
      paymentStatus: 'Pagado',
      currencyId: 1,
    },
  ]

  const headers = [
    { xs: 3, header: 'Factura' },
    { xs: 3, header: 'Fecha Emisión' },
    { xs: 2, header: 'Valor' },
    { xs: 1, header: 'Moneda' },
    { xs: 1, header: 'Estado' },
    { xs: 1, header: 'Fecha Pago' },
    { xs: 1, header: '' },
  ]

  return (
    <List>
      <Grid container alignItems='center' justifyContent='center' mb={3}>
        {headers.map(header => (
          <Grid item xs={header.xs}>
            <Typography sx={{ fontWeight: 'bold' }} variant='body1'>
              {header.header}
            </Typography>
          </Grid>
        ))}
      </Grid>
      {invoices.map(invoice => (
        <InvoiceItem invoice={invoice} key={invoice.id} />
      ))}
    </List>
  )
}

export default Invoices
