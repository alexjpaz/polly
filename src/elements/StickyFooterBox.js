import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  forceBottom: {
    'width': '100%',
    'position': 'fixed',
    'bottom': 0,
    'margin-bottom': '10px',
  },
});

export default function CenteredContainer(props) {
  const classes = useStyles();

  return (
    <Box className={classes.forceBottom}>
        { props.children }
    </Box>
  );
}
