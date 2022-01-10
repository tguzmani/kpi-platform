import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import TabPanel from '../layout/TabPanel'
import AccountReportsTable from './AccountReportsTable'

const UtilsPanel = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Paper sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label='Reportes' />
          <Tab label='Contratos' disabled />
          <Tab label='Historial' disabled />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <AccountReportsTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Paper>
  )
}

export default UtilsPanel
