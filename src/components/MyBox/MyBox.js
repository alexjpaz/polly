import React, { useState, useContext } from 'react';

import { AppContext } from '../../App';

import './MyBox.css';

import TargetPhrase from './TargetPhrase'

function MyBox() {
  const data = useContext(AppContext);

  let [ state, setState ] = useState({
    phrase: data.phrases[0],
    index: 0
  });

  return (

    <div className='MyBox'>
      <TargetPhrase phrase={state.phrase} />

      <button onClick={() => {
        let index = state.index + 1;

        if(index >= data.phrases.length) {
          index = 0;
        }

        setState({
          phrase: data.phrases[index],
          index
        });
      }}>next</button>
    </div>
  );
}

export default MyBox;
