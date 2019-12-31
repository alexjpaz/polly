import React, { useState, useContext } from 'react';

import AppContext from '../../AppContext';

import './MyBox.css';

import CenteredContainer from '../../elements/CenteredContainer';
import StickyFooterBox from '../../elements/StickyFooterBox';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Box from '@material-ui/core/Box';

import PhraseCard from './PhraseCard'
import RecitePhraseCard from './RecitePhraseCard'

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
    <Box mt={1}>
      <Box mb={2}>
        <PhraseCard phrase={state.phrase} />
      </Box>
      <Box mb={2}>
        <RecitePhraseCard phrase={state.phrase} />
      </Box>

      <StickyFooterBox>
        <CenteredContainer>
          <Box mb={2}>
              {/*            <ReciteFabButton phrase={state.phrase.target } /> */}
          </Box>
          <ButtonGroup aria-label="outlined navigation button group">
            <Button onClick={back}>Back</Button>
            <Button onClick={next}>Next</Button>
          </ButtonGroup>
        </CenteredContainer>
      </StickyFooterBox>
    </Box>
  );
}

export default MyBox;
