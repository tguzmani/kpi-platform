import { createTheme } from '@mui/material'
import { orange, grey } from '@mui/material/colors'

const white = 'white'
const muiTheme = createTheme()

const theme = createTheme({
  palette: {
    light: { main: white, contrastText: '#000' },
    secondary: { main: orange[500], dark: orange[700] },
  },

  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          backgroundColor: grey[100],
          margin: `${muiTheme.spacing(1.5)} 0`,
          boxShadow: muiTheme.shadows[1],
          borderRadius: '10px',
          border: `1px solid ${grey[300]}`,
        },
      },
    },

    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: grey[100],
          },
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        head: {
          color: white,

          backgroundColor: muiTheme.palette.primary.main,
        },
      },
    },
  },
})

export default theme
