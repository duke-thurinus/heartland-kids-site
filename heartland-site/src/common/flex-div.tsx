import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

/*
 * Wrapper div with a predefined interface for flexbox css options
*/

export interface FlexDivProps extends React.HTMLAttributes<HTMLDivElement> {
  flexDirection?: 'row' | 'column';
  alignItems?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}

export default ({
    flexDirection,
    alignItems,
    ...divProps
}: FlexDivProps) => {

    const useStyles = makeStyles({
      flexDiv: {
        display: 'flex', 
        flex: 'auto',
        flexDirection, 
        alignItems,
        ...divProps.style,
      },
    });
    const classes = useStyles();

    return <div className={classes.flexDiv} {...divProps}>{divProps.children}</div>;
};
