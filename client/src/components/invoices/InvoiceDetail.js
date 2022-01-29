import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import InvoiceDetailItem from './InvoiceDetailItem'

const InvoiceDetail = ({ invoice }) => {
  const invoiceDetails = [
    {
      invoiceId: 1,
      name: 'Plataforma',
      cost: 5,
      quantity: 8,
      totalValue: 40,
    },
    {
      invoiceId: 1,
      name: 'Reportes',
      cost: 1,
      quantity: 7,
      totalValue: 7,
    },
    {
      invoiceId: 1,
      name: 'Usuarios',
      cost: 0.3,
      quantity: 3,
      totalValue: 0.9,
    },
    {
      invoiceId: 1,
      name: 'Servicio B',
      cost: 2,
      quantity: 5,
      totalValue: 10,
    },
    {
      invoiceId: 2,
      name: 'Plataforma',
      cost: 5,
      quantity: 2,
      totalValue: 10,
    },
    {
      invoiceId: 2,
      name: 'Reportes',
      cost: 1,
      quantity: 5,
      totalValue: 5,
    },
    {
      invoiceId: 2,
      name: 'Usuarios',
      cost: 0.3,
      quantity: 3,
      totalValue: 0.9,
    },
    {
      invoiceId: 2,
      name: 'Servicio B',
      cost: 2,
      quantity: 4,
      totalValue: 8,
    },
  ]

  const thisInvoiceDetails = invoiceDetails.filter(
    invoiceDetail => invoiceDetail.invoiceId === invoice.id
  )

  const invoiceTotal = () =>
    thisInvoiceDetails
      .map(invoiceDetail => invoiceDetail.totalValue)
      .reduce((acc, value) => acc + value, 0)

  console.log('invoiceTotal', invoiceTotal())

  const headers = ['Item', 'Valor Un.', 'Cantidad', 'Valor Total']

  return (
    <Box my={1} mb={3}>
      <TableContainer component={Paper}>
        <Table size='small'>
          <TableHead>
            <TableRow sx={{ fontWeight: 'bold' }}>
              {headers.map(header => (
                <TableCell
                  key={header}
                  sx={{ fontWeight: 'bold' }}
                  align={header !== 'Nombre' ? 'center' : ''}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {thisInvoiceDetails.map(invoiceDetail => (
              <InvoiceDetailItem invoiceDetail={invoiceDetail} />
            ))}

            <TableRow>
              <TableCell colSpan={2} align='right' />

              <TableCell sx={{ fontWeight: 'bold' }} align='center'>
                Total Contrato:
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align='center'>
                {invoiceTotal()}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default InvoiceDetail
