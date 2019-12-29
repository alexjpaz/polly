import React from 'react';
import logo from './logo.svg';
import './App.css';

import MyBox from './components/MyBox/';

export const AppContext = React.createContext({});

function App() {
  const [state, updateState] = React.useState({
    foo: "bar"
  });

  return (
    <div className='App-flex-container'>
      <div className='App'>
        <AppContext.Provider value={state}>
          <MyBox />
          <button onClick={() => {
            updateState({"foo":"zuh"})
          }}>update</button>
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
