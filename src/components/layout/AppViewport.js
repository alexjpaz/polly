import React from 'react';

import Box from '@material-ui/core/Box';

import Permissions from '../Permissions';

import TopBar from './TopBar';

import ReciteBox from '../ReciteBox/ReciteBox';

export default function AppViewport() {
  return (
    <Box height="100%">
      <TopBar />
      <ReciteBox />
      <Permissions />
    </Box>
  );
};
