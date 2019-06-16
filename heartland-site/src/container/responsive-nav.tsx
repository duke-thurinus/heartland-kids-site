import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuNavBar from 'container/menu-nav-bar';
import TabNavBar from 'container/tab-nav-bar';

export default () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  return isSmallScreen ? 
              <MenuNavBar/>
              : <TabNavBar/>;
};