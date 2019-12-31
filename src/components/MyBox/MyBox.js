import React, { useState, useContext } from 'react';

import AppContext from '../../AppContext';

import './MyBox.css';

import TargetPhrase from './TargetPhrase'

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function MyBox() {
  const data = useContext(AppContext);

  let [ state, setState ] = useState({
    phrase: data.phrases[0],
    index: 0
  });

  const iterate = (offset) => () => {
    let index = state.index + 1;

    if(index >= data.phrases.length) {
      index = 0;
    }

    setState({
      phrase: data.phrases[index],
      index
    });
  };

  const back = iterate(-1);
  const next = iterate(+1);

  return (
    <div className='MyBox'>
      <TargetPhrase phrase={state.phrase} />

      <ButtonGroup aria-label="outlined navigation button group">
        <Button onClick={back}>Back</Button>
        <Button onClick={next}>Next</Button>
      </ButtonGroup>
    </div>
  );
}

export default MyBox;
