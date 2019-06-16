import React from 'react';
import FlexDiv from 'common/flex-div';
import NavBar from 'pages/container/responsive-nav';
import NavRouter from 'common/nav-router';
import HeaderBar from 'pages/container/header-bar';
import { WhiteRedTheme } from 'common/colors';
import { ThemeProvider } from '@material-ui/styles';
import {BrowserRouter, Link} from 'react-router-dom';
import { MenuList } from '@material-ui/core';

export default () => {
  return (
        <FlexDiv
          id="AppContainer"
          flexDirection="column"
          alignItems="center"
          style={{
            paddingTop: '0',
            height: '200vh',
          }}
        >
          <ThemeProvider theme={WhiteRedTheme}>
            <BrowserRouter
              basename="/"
            >
              <HeaderBar/>
              <NavBar/>
              <NavRouter/>
              {/* <Link to={'about-us'}>Test</Link>
              <Link to={'/'}>Test</Link> */}
            </BrowserRouter>
          </ThemeProvider>
        </FlexDiv>
  );
};
