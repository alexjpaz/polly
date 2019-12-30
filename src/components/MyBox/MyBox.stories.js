import React from 'react';

import { AppContext } from '../../App';
import MyBox from './MyBox';

import data from '../../datasources/foo.json';

export default {
  title: 'components/MyBox',
};

export const foo = () => (
  <AppContext.Provider value={data}>
    <MyBox />
    <p>lol</p>
  </AppContext.Provider>
);

