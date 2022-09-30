import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Toolbar } from '@material-ui/core';
import MenuList from 'container/menu-list';
import {ReactComponent as Logo} from 'static/images/heartland-kids-logo.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
    },
    appBar: {
      boxShadow: '0 4px 2px -2px rgba(0,0,0,0.14)',
    },
    toolBar: {
      justifyContent: 'center',
    },
    menuIcon: {
      fontSize: '2.5rem',
    },
  })
);

export default () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = (newState: boolean) => () => {
    setIsOpen(newState);
  };

  const classes = useStyles();

  return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="sticky">
          <Toolbar className={classes.toolBar}>
            <IconButton onClick={handleClick(true)}>
                <MenuIcon className={classes.menuIcon}/>
            </IconButton>
          </Toolbar>
          <Drawer
            open={isOpen}
            onClose={handleClick(false)}
          >
            <div
                tabIndex={0}
                role="button"
                onClick={handleClick(false)}
                onKeyDown={handleClick(false)}
                style={{width: '200px'}}
            >
              <MenuList/>
            </div>
          </Drawer>
        </AppBar>
      </div>
  );
};
