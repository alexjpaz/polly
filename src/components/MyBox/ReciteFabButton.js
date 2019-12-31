import React from 'react';

import Fab from '@material-ui/core/Fab';
import Mic from '@material-ui/icons/Mic';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';

export default function ReciteFabButton(props) {
  let icon = <Mic />;
  let text = "Recite";

  if(props.state === "listening") {
    icon = <RecordVoiceOverIcon />
    text = "Recording";
  }

  if(props.state === "recording") {
    icon = <RecordVoiceOverIcon />
    text = "Recording";
  }

  return (
    <Fab variant="extended" {...props}  color="secondary">
      <Mic />
      Recite
    </Fab>
  );
}

