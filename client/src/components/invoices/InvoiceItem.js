import React from 'react'
import { useSelector } from 'react-redux'
import VisibilityIcon from '@mui/icons-material/Visibility'

import {
  Grid,
  IconButton,
  Collapse,
  ListItem,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
} from '@mui/material'

import DayJS from 'react-dayjs'
import InvoiceDetail from './InvoiceDetail'

const InvoiceItem = ({ invoice }) => {
  const [open, setOpen] = React.useState(false)
  const { currencies } = useSelector(state => state.currencies)

  const thisInvoiceCurrency = currencies.find(
    currency => currency.id === invoice.currencyId
  )

  const handleToggleCollapse = () => {
    setOpen(!open)
  }

  return (
    <>
      <ListItem dense>
        <Grid container alignItems='center' justifyContent='center'>
          <Grid item xs={3}>
            <ListItemText>
              <Typography variant='body1'>{invoice.invoiceId}</Typography>
            </ListItemText>
          </Grid>
          <Grid item xs={3}>
            <ListItemText>
              <Typography variant='body1'>
                <DayJS format='DD-MM-YYYY'>{invoice.creationDate}</DayJS>
              </Typography>
            </ListItemText>
          </Grid>
          <Grid item xs={2}>
            <ListItemText>
              <Typography variant='body1'>{invoice.value}</Typography>
            </ListItemText>
          </Grid>
          <Grid item xs={1}>
            <ListItemText>
              <Typography variant='body1'>
                {thisInvoiceCurrency?.code}
              </Typography>
            </ListItemText>
          </Grid>
          <Grid item xs={1}>
            <ListItemText>
              <Typography variant='body1'>{invoice.paymentStatus}</Typography>
            </ListItemText>
          </Grid>
          <Grid item xs={1}>
            <ListItemText>
              <Typography variant='body1'>
                <DayJS format='DD-MM-YYYY'>{invoice.paymentDate}</DayJS>
              </Typography>
            </ListItemText>
          </Grid>
          <Grid item xs={1}>
            <ListItemSecondaryAction>
              <IconButton onClick={handleToggleCollapse}>
                <VisibilityIcon color='primary' />
              </IconButton>
            </ListItemSecondaryAction>
          </Grid>
        </Grid>
      </ListItem>

      <Collapse in={open} timeout='auto' unmountOnExit>
        {/* <UserReportsTable userId={user.id} /> */}
        <InvoiceDetail invoice={invoice} />
      </Collapse>
    </>
  )
}

export default InvoiceItem
