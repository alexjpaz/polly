import React, { useState, useContext } from 'react';

import AppContext from '../../AppContext';

import './MyBox.css';

import Container from '@material-ui/core/Container';

import CenteredBox from '../../elements/CenteredBox';
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
    let index = state.index + offset;

    if(index >= data.phrases.length) {
      index = 0;
    }

    if(index < 0) {
      index = data.phrases.length - 1;
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
      <Container maxWidth="md">
        <Box mb={2}>
          <PhraseCard phrase={state.phrase} />
        </Box>
        <Box mb={2}>
          <RecitePhraseCard phrase={state.phrase} />
        </Box>
      </Container>

      <StickyFooterBox>
        <CenteredBox>
          <Box mb={2}>
              {/*            <ReciteFabButton phrase={state.phrase.target } /> */}
            </Box>
            <ButtonGroup aria-label="outlined navigation button group">
              <Button onClick={back}>Back</Button>
              <Button disabled={true}>{state.index + 1} / {data.phrases.length}</Button>
              <Button onClick={next}>Next</Button>
            </ButtonGroup>
          </CenteredBox>
        </StickyFooterBox>
      </Box>
  );
}

export default MyBox;
