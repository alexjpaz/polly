import React from 'react';

import Fab from '@material-ui/core/Fab';
import Mic from '@material-ui/icons/Mic';

export default function ReciteButton(props) {
  return (
    <Fab variant="extended" {...props}  color="secondary">
      <Mic/>
      Recite
    </Fab>
  );
}

