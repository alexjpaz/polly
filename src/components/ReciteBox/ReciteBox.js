import React, { useState, useContext } from 'react';

import AppContext from '../../AppContext';

import './ReciteBox.css';

import Container from '@material-ui/core/Container';

import CenteredBox from '../../elements/CenteredBox';
import StickyFooterBox from '../../elements/StickyFooterBox';

import Box from '@material-ui/core/Box';

import PhraseCard from './PhraseCard'
import RecitePhraseCard from './RecitePhraseCard'
import ReciteFabButton from './ReciteFabButton';

import PhraseNavigator from './PhraseNavigator';

function ReciteBox() {
  const data = useContext(AppContext);

  let [ phrase, setPhrase ] = useState(data.phrases[0]);

  return (
    <Box mt={1}>
      <Container maxWidth="md">
        <Box mb={2}>
          <PhraseCard phrase={phrase} />
        </Box>
        <Box mb={2}>
          <RecitePhraseCard phrase={phrase} />
        </Box>
      </Container>

      <StickyFooterBox>
        <CenteredBox>
          <Box mb={2}>
            <ReciteFabButton phrase={phrase} />
          </Box>
          <PhraseNavigator
            phrases={data.phrases}
            setCurrentPhrase={setPhrase}
            />
          </CenteredBox>
        </StickyFooterBox>
      </Box>
  );
}

export default ReciteBox;
