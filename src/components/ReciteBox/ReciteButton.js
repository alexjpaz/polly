import React from 'react';

import Button from '@material-ui/core/Button';
import Mic from '@material-ui/icons/Mic';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';

export default function ReciteButton(props) {
  let icon = <Mic />;
  let text = "Recite";
  let variant = "text";

  if(props.state === "listening") {
    icon = <RecordVoiceOverIcon />
    text = "Listening";
    variant = "outlined";
  }

  if(props.state === "recording") {
    icon = <RecordVoiceOverIcon />
    text = "Recording";
    variant = "contained";
  }

  return (
    <Button
      startIcon={icon}
      variant={variant}
       color="secondary"
      {...props}
     >
        { text }
    </Button>
  );
}

