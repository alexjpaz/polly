import React from 'react';

import GitHubLink from '../GitHubLink';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Button from '@material-ui/core/Button';

export default function AppViewport() {
  return (
      <Box height="100%">
    <Container maxWidth="sm">

        <Button variant="contained">Default</Button>
        <GitHubLink />
    </Container>
      </Box>
  );
};
