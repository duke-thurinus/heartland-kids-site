import * as React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import { RouteLabels } from 'container/nav-router';
import { makeStyles, Theme, createStyles, Divider } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { getThemeProps } from '@material-ui/styles';
import { colorStrings } from 'common/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
    },
    list: {
    },
    listItemText: {
        fontSize: '1.4rem',
        color: colorStrings.boldRed,
        fontWeight: 600,
    },
  })
);

export default withRouter((props: any) => {
    const classes = useStyles();
    const handleClick = (idx: number) => {
        props.history.push(RouteLabels[idx].route);
    };
    return (
        <div className={classes.root}>
          <List className={classes.list}component="nav">
            {
                RouteLabels.map((item, idx) => (
                    <div key={idx}>
                  <ListItem 
                    key={item.label}
                    button={true}
                    onClick={() => handleClick(idx)}
                  >
                      <ListItemText className={classes.listItemText} key={idx} primary={item.label}/>
                  </ListItem>
                  <Divider/>
                    </div>
                ))
            }
          </List>
        </div>
    );
});