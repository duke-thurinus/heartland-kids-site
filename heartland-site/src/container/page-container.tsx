import React from 'react';
import NavRouter from 'container/nav-router';
import { makeStyles, createStyles } from '@material-ui/styles';
import { useMediaQuery, Theme } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageContainer: {
      flexGrow: 1,
      marginTop: '1%',
      marginBottom: '1%',
      paddingLeft: (props: any) => props.marginSides,
      paddingRight: (props: any) => props.marginSides,
    },
  })
);
export default () => {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const marginSides = isLargeScreen ? '15%' : (isSmallScreen ? '5%' : '10%');
    console.log(marginSides);
    const classes = useStyles({marginSides});
    return (
        <div className={classes.pageContainer}>
              <NavRouter/>
        </div>
    );
};