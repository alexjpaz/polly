import React from 'react';

import Fab from '@material-ui/core/Fab';
import Mic from '@material-ui/icons/Mic';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';

import ReciteContext from '../../ReciteContext';

export default function ReciteFabButton(props) {

  let appContext = React.useContext(ReciteContext);

  let icon = <Mic />;
  let text = "Recite";

  if(appContext.state === "listening") {
    icon = <RecordVoiceOverIcon />
    text = "Listening";
  }

  if(appContext.state === "recording") {
    icon = <RecordVoiceOverIcon />
    text = "Recording";
  }

  const record = () => appContext.record(props.phrase);

  return (
    <Fab variant="extended" {...props}  color="secondary" onClick={record}>
        { icon }
        { text }
    </Fab>
  );
}

