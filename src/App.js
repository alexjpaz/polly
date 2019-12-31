import React from 'react';

import './App.css';

import data from './datasources/foo.json';

import AppTheme from './AppTheme';

import { DefaultReciteContextProvider } from './ReciteContext';
import AppContext from './AppContext';

import AppViewport from './components/layout/AppViewport';

function App() {
  const [ state ] = React.useState(Object.assign({
    record: () => {
      console.log(123);
    }
  }, data));

  return (
    <AppTheme>
      <AppContext.Provider value={state}>
        <DefaultReciteContextProvider>
          <AppViewport />
        </DefaultReciteContextProvider>
      </AppContext.Provider>
    </AppTheme>
  );
}

export default App;
