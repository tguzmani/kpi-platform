import React from 'react'
import { IconButton, TableCell, TableRow, Collapse, Box } from '@mui/material'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import UsersTableActions from './UsersTableActions'
import UserReportsTable from './UserReportsTable'
import ActiveIndicator from './../layout/ActiveIndicator'

const UsersTableRow = ({ user }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <TableRow key={user.id} sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component='th' scope='row'>
          {user.name}
        </TableCell>

        <TableCell align='center'>{user.username}</TableCell>
        <TableCell align='center'>{user.mail}</TableCell>
        <TableCell align='center'>{user.groups}</TableCell>
        <TableCell align='center'>
          <ActiveIndicator active={user.active} />
        </TableCell>
        <TableCell align='center'>
          <UsersTableActions userId={user.id} />
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box p={4}>
              <UserReportsTable userId={user.id} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}
export default UsersTableRow
