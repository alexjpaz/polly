import React from 'react';

import './App.css';

import data from './datasources/foo.json';

import AppTheme from './AppTheme';
import AppContext from './AppContext';
import AppViewport from './components/layout/AppViewport';

function App() {
  const [ state ] = React.useState(data);

  return (
    <AppTheme>
      <AppContext.Provider value={state}>
        <AppViewport />
      </AppContext.Provider>
    </AppTheme>
  );
}

export default App;
