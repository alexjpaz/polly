import React from 'react';
import './App.css';

import data from './datasources/foo.json';

import GitHubLink from './components/GitHubLink';
import MyBox from './components/MyBox/';

export const AppContext = React.createContext({});

function App() {
  const [ state ] = React.useState(data);

  return (
    <div className='App-flex-container'>
      <div className='App'>
        <AppContext.Provider value={state}>
          <MyBox />
        </AppContext.Provider>
      </div>
      <GitHubLink />
    </div>
  );
}

export default App;
