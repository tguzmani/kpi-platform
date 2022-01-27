import { createTheme } from '@mui/material'
import { orange, grey } from '@mui/material/colors'

const white = 'white'
const fontSize = '0.875rem'
const palette = {
  light: { main: white, contrastText: '#000' },
  secondary: { main: orange[500], dark: orange[700] },
}

const muiTheme = createTheme({ palette })

const theme = createTheme({
  palette,

  typography: {
    body1: {
      fontSize,
    },

    h6: {
      fontSize: '1rem',
      lineHeight: '1.2',
      color: grey[600],
      fontWeight: 'bold',
    },

    accent: {
      color: muiTheme.palette.secondary.main,
    },
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          '&.container': { padding: '3em' },
        },
      },
    },

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
