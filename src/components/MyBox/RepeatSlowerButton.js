import React from 'react';

import Button from '@material-ui/core/Button';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';

export default function RepeatSlowerButton(props) {
  return (
    <Button size="small" variant="contained" {...props}>
      <SlowMotionVideoIcon />
    </Button>
  );
}
