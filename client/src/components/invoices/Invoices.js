import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import List from '@mui/material/List'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InvoiceItem from './InvoiceItem'
import Loading from './../layout/Loading'
import {
  readInvoicesByContract,
  readInvoicesDetailByContract,
} from './../../state/invoices/invoicesActions'

const Invoices = () => {
  const dispatch = useDispatch()

  const { invoices, loading } = useSelector(state => state.invoices)
  const { contract } = useSelector(state => state.contracts)

  useEffect(() => {
    dispatch(readInvoicesByContract(contract))
    dispatch(readInvoicesDetailByContract(contract))
  }, [])

  const headers = [
    { xs: 3, header: 'Factura' },
    { xs: 3, header: 'Fecha Emisión' },
    { xs: 2, header: 'Valor' },
    { xs: 1, header: 'Moneda' },
    { xs: 1, header: 'Estado' },
    { xs: 1, header: 'Fecha Pago' },
    { xs: 1, header: '' },
  ]

  if (loading && invoices.length === 0) return <Loading />

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
