import { createTheme } from '@mui/material'
import { orange } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    light: { main: '#fff', contrastText: '#000' },
    secondary: { main: orange[500], dark: orange[700] },
  },
})

export default theme
