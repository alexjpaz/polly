import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  center: {
    'text-align': 'center'
  },
});

export default function CenteredBox(props) {
  const classes = useStyles();

  return (
    <Box className={classes.center}>
        { props.children }
    </Box>
  );
}
