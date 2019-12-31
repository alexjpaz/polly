import React from 'react';

import GitHubLink from '../GitHubLink';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import MyBox from '../MyBox/MyBox';

export default function AppViewport() {
  return (
    <Box height="100%">
      <Container maxWidth="sm">
        <MyBox />
        <GitHubLink />
      </Container>
    </Box>
  );
};
