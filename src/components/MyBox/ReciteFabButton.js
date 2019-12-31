import React from 'react';

import Fab from '@material-ui/core/Fab';
import Mic from '@material-ui/icons/Mic';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';

import AppContext from '../../AppContext';

export default function ReciteFabButton(props) {

  let appContext = React.useContext(AppContext);

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

  const record = () => {
    appContext.record();
  };

  return (
    <Fab variant="extended" {...props}  color="secondary" onClick={record}>
      <Mic />
      Recite
    </Fab>
  );
}

