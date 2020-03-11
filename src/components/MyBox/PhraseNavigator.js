import React from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import PhraseDialog from './PhraseDialog';

export function PhraseNavigator({ phrases, setCurrentPhrase }) {
  let [ index, setIndex ] = React.useState(0);
  let [ open, setOpen ] = React.useState(false);

  const iterate = (offset) => () => {
    index = index + offset;

    if(index >= phrases.length) {
      index = 0;
    }

    if(index < 0) {
      index = phrases.length - 1;
    }

    setCurrentPhrase(phrases[index]);
    setIndex(index);
  };

  const back = iterate(-1);
  const next = iterate(+1);

  const openPhraseDialog = () => {
    setOpen(true);
  }

  const handlePhraseDialogClose = (phrase, index) => {

    setCurrentPhrase(phrase);
    setIndex(index);
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup aria-label="outlined navigation button group">
        <Button onClick={back}>Back</Button>
        <Button onClick={openPhraseDialog}>{index + 1} / {phrases.length}</Button>
        <Button onClick={next}>Next</Button>
      </ButtonGroup>
      <PhraseDialog open={open} phrases={phrases} handleClose={handlePhraseDialogClose} />
    </React.Fragment>
  );

}

export default PhraseNavigator;
