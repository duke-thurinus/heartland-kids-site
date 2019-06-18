import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {ReactComponent as Logo} from 'static/images/heartland-kids-logo.svg';
import { colorStrings } from 'common/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  root: {
      width: '100%',
      paddingBottom: '0',
      marginBottom: '0',
  },
  appBar: {
      boxShadow: 'none',
  },
  toolBar: {
      justifyContent: 'center',
      flexWrap: 'wrap',
  },
  typography: {
      fontSize: (props: any) => props.fontSize,
      fontFamily: 'inherit',
  },
  logo: {
      maxWidth: (props: any) => props.logoWidth,
      minWidth: (props: any) => props.logoWidth,
  },
  accentLine: {
      border: '.5px',
      width: '80%',
      borderStyle: 'solid',
      borderColor: colorStrings.grey,
  },
  flexDiv: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
}));

export default () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const fontSize = isSmallScreen ? '1.6rem' : '2.7rem';
  const logoWidth = isSmallScreen ? '35%' : '10%';
  const classes = useStyles({fontSize, logoWidth});

  return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}  position="static">
          <Toolbar className={classes.toolBar} disableGutters={true}>
            <Logo className={classes.logo}/>
            <div className={classes.flexDiv}>
            <Typography className={classes.typography} color="secondary" variant="h3">
                #FREEHEARTLANDKIDS
            </Typography>
            <div className={classes.accentLine}/>
            </div>
          </Toolbar>
        </AppBar>
      </div>
  );
};