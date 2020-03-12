import React from 'react';

import { AppContext } from '../../App';
import ReciteBox from './ReciteBox';

import data from '../../datasources/foo.json';

export default {
  title: 'components/ReciteBox',
};

export const foo = () => (
  <AppContext.Provider value={data}>
    <ReciteBox />
    <p>lol</p>
  </AppContext.Provider>
);

