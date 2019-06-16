import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuNavBar from 'pages/container/menu-nav-bar';
import TabNavBar from 'pages/container/tab-nav-bar';

export default () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  return isSmallScreen ? 
              <MenuNavBar/>
              : <TabNavBar/>;
};