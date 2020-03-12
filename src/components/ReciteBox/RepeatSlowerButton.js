import React from 'react';

import Button from '@material-ui/core/Button';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';

export default function RepeatSlowerButton(props) {
  return (
    <Button {...props}>
      <SlowMotionVideoIcon />
      { props.children }
    </Button>
  );
}
