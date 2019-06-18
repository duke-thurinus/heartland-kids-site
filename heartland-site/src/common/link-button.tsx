import React from 'react';
import { makeStyles, Theme, createStyles, Link } from '@material-ui/core';
import Button, { ButtonProps } from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
        margin: theme.spacing(1),
        border: '2px solid',
          '&:hover': {
                border: '2px solid',
          },
      },
      link: {
          textDecoration: 'none',
          '&:hover': {
              textDecoration: 'none',
          },
      },
}));
export interface LinkButtonProps extends ButtonProps {
    link: string;
}
export default (props: LinkButtonProps) => {
    const classes = useStyles();
    
    const {link, ...baseProps} = props;
    return (
        <Button 
            className={classes.button} 
            variant="outlined"
            color="secondary"
            size="large"
            {...baseProps}
        >
            <Link 
                className={classes.link}
                color="secondary" 
                href={link}
            >
                TAKE ACTION NOW
            </Link>
        </Button>
    );

}