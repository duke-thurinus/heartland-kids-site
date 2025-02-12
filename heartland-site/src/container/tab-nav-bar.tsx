import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withRouter } from 'react-router-dom';
import { RouteLabels } from 'container/nav-router';
import Logo from '../static/images/heartland-kids-logo.svg';
import Toolbar from '@material-ui/core/Toolbar';
import {Image} from '@material-ui/icons';

// export interface LinkTabProps {
//   label: string;
//   to: string;
// }

// // FIXME link composition not working....
// const LinkTab = (props: LinkTabProps) => {
//   return ( 
//     // This implementation breaks the tab bar funtionality..
//     // <RouterLink to={props.to}>
//     //   <Tab label={props.label}/>
//     // </RouterLink>

//     // This implentation doesn't render,
//     // but is what appears to be suggested in the docs.. 
//     <Tab
//       label={props.label}
//       component={() => <Link to={props.to} component={RouterLink}/>}
//     /> 
//   );
// };

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
    },
    appBar: {
      boxShadow: '0 4px 2px -2px rgba(0,0,0,0.14)',
    },
    tab: {
      fontSize: '1.2rem',

    },
      image: {
          height: '6%',
          width: '6%',
          fit: 'contain',
          paddingRight: '25px',
      },
  })
);

export default withRouter((props: any) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    // this is safe beause the tabs are generated by map
    props.history.push(RouteLabels[newValue].route);
  };

  return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="sticky">
            <Toolbar>
                <img className={classes.image} src={Logo} alt={'The logo of Free Heartland Kids: An adult holding the hand of a child'}/>
                <Tabs centered={true} value={value} onChange={handleChange}>
                    {
                        RouteLabels.map((item) => (
                            <Tab className={classes.tab} key={item.label} label={item.label}/>)
                        )
                    }
                </Tabs></Toolbar>
        </AppBar>
      </div>
  );
});
