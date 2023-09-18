import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#B0B0B0',
    },
    // overrides: {
    //   // Name of the component ⚛️
    //   MuiCssBaseline: {
    //     // Name of the rule
    //     '@global': {
    //       '*, *::before, *::after': {
    //         transition: 'none !important',
    //         animation: 'none !important',
    //       },
    //     },
    //   },
    // },
  },
});

export default theme;
