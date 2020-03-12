import React from 'react';

import { AppContext } from '../../AppContext';
import ReciteBox from './ReciteBox';

import data from '../../datasources/foo.json';

export default {
  title: 'components/ReciteBox',
};

export const foo = () => (
  <AppContext.Provider value={data}>
    <ReciteBox />
  </AppContext.Provider>
);

