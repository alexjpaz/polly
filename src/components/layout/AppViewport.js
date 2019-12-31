import React from 'react';

import Box from '@material-ui/core/Box';

import TopBar from './TopBar';

import MyBox from '../MyBox/MyBox';

export default function AppViewport() {
  return (
    <Box height="100%">
      <TopBar />
      <MyBox />
    </Box>
  );
};
