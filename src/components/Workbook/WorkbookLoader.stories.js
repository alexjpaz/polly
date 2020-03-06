import React from 'react';

import Box from '@material-ui/core/Box';
import { AppContext } from '../../AppContext';
import WorkbookLoader from './WorkbookLoader';

import data from '../../datasources/foo.json';

export default {
  title: 'components/WorkbookLoader',
};

export const foo = () => (
  <AppContext.Provider value={data}>
    <Box color="text.primary">
      <WorkbookLoader />
    </Box>
  </AppContext.Provider>
);

