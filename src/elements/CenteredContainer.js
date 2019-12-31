import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  center: {
    'text-align': 'center'
  },
});

export default function CenteredContainer(props) {
  const classes = useStyles();

  return (
    <Container className={classes.center}>
        { props.children }
    </Container>
  );
}
