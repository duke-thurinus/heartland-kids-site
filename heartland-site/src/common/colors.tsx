import { createMuiTheme } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';

export const colorStrings = {
    boldRed: '#c41515',
    white: '#ffffff',
    softRed: '#db736b',
    blue: '#529ecc',
    grey: '#9ca0a3',
    yellow: '#ffa400',
    black: '#000000',
};

export const WhiteRedTheme = createMuiTheme({
    palette: {
      primary: {
        main: colorStrings.white,
      },
      secondary: {
        light: colorStrings.softRed,
        main: colorStrings.boldRed,
      },
      error: {
          main: colorStrings.yellow,
      },
    },
 });
