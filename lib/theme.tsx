import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const themeCore = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 762,
      lg: 1024,
      xl: 1280,
    },
  },
  typography: {
    fontSize: 16,
  },
};

export const themeLight = createMuiTheme({
  palette: {
    type: 'light',
  },
  ...themeCore,
});

export const themeDark = createMuiTheme({
  palette: {
    type: 'dark',
    primary: purple,
    secondary: green,
  },
  ...themeCore,
});
