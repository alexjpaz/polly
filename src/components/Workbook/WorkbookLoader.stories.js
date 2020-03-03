import React from 'react';

import { AppContext } from '../../AppContext';
import WorkbookLoader from './WorkbookLoader';

import data from '../../datasources/foo.json';

export default {
  title: 'components/WorkbookLoader',
};

export const foo = () => (
  <AppContext.Provider value={data}>
    <WorkbookLoader />
  </AppContext.Provider>
);

