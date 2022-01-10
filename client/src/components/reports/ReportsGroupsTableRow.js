import React from 'react'
import { TableCell, TableRow, IconButton, Collapse, Box } from '@mui/material'
import ActiveIndicator from '../layout/ActiveIndicator'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import ReportsTable from './ReportsTable'
import { useSelector } from 'react-redux'

const ReportsGroupsTableRow = ({ reportsGroup }) => {
  const [open, setOpen] = React.useState(false)
  const { reports } = useSelector(state => state.reports)

  const thisGroupReports = reports.filter(
    report => report.reportGroupId === reportsGroup.id
  )

  return (
    <>
      <TableRow
        key={reportsGroup.id}
        sx={{ '& > *': { borderBottom: 'unset' } }}
      >
        <TableCell>
          <IconButton size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component='th' scope='row'>
          {reportsGroup.code}
        </TableCell>
        <TableCell align='center'>{reportsGroup.name}</TableCell>
        <TableCell align='center'>{reportsGroup.sections}</TableCell>
        <TableCell align='center'>
          <ActiveIndicator active={reportsGroup.active} />
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box p={4}>
              <ReportsTable reports={thisGroupReports} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default ReportsGroupsTableRow
