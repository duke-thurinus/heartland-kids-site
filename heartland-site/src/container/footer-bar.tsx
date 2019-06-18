import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import { Theme, createStyles, makeStyles, useMediaQuery, IconButton, Link, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import externalLinks from 'common/external-links';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  root: {
      width: '100%',
      paddingTop: '3%',
  },
  appBar: {
      boxShadow: 'none',
      position: 'static',
  },
  toolBar: {
      alignContent: 'center',
      justifyContent: 'space-around',
      paddingLeft: (props: any) => props.toolBarPadding,
      paddingRight: (props: any) => props.toolBarPadding,
  },
  linkText: {
    fontWeight: 600,
    fontSize: '.6rem',
  },
  textContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
  },

}));

export default () => {
  const theme = useTheme();
  const isLargeSreen = useMediaQuery(theme.breakpoints.up('lg'));
  // keep icons from getting too spread out on large screens
  const toolBarPadding = isLargeSreen ? '20%' : '0%';

    const classes = useStyles({toolBarPadding});

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} color="secondary">
            <Toolbar className={classes.toolBar}>
                <IconButton 
                    href={`mailto:${externalLinks.freeHeartlandEmail}`} 
                    component={Link}
                    color="primary"
                >
                    <EmailIcon/>
                </IconButton>
                <IconButton 
                    href={externalLinks.cdsaTwitter} 
                    component={Link}
                    color="primary"
                >
                    <FaTwitter/>
                </IconButton>
                <IconButton 
                    href={externalLinks.cdsaFacebook} 
                    component={Link}
                    color="primary"
                >
                    <FaFacebookF/>
                </IconButton>
                <Button
                    style={{textDecoration: 'none'}}
                    color="primary"
                    href={externalLinks.cdsaMainSite}
                    component={Link}
                >
                    <div className={classes.textContainer}>
                        <Typography className={classes.linkText} >MADE BY</Typography>
                        <Typography align="center" className={classes.linkText}>CHI DSA</Typography>
                    </div>
                </Button>
            </Toolbar>
        </AppBar>
      </div>
    );
};