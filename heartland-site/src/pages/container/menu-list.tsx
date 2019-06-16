import * as React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import { RouteLabels } from 'common/nav-router';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { getThemeProps } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
    },
  })
);

export default withRouter((props: any) => {
    const classes = useStyles();
    const handleClick = (idx: number) => {
        props.history.push(RouteLabels[idx].route)
    }
    return (
        <div className={classes.root}>
          <List component="nav">
            {
                RouteLabels.map((item, idx) => (
                  <ListItem 
                    key={item.label}
                    button={true}
                    onClick={() => handleClick(idx)}
                  >
                      <ListItemText primary={item.label}/>
                  </ListItem>
                ))
            }
          </List>
        </div>
    );
});