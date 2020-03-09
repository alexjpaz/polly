import React from 'react';

import './App.css';


import AppTheme from './AppTheme';

import { DefaultReciteContextProvider } from './ReciteContext';
import { DefaultAppContextProvider } from './AppContext';

import AppViewport from './components/layout/AppViewport';

function App() {
  return (
    <AppTheme>
      <DefaultAppContextProvider>
        <DefaultReciteContextProvider>
          <AppViewport />
        </DefaultReciteContextProvider>
      </DefaultAppContextProvider>
    </AppTheme>
  );
}

export default App;
