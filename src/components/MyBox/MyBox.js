import React, { useContext } from 'react';

import { AppContext } from '../../App';

import './MyBox.css';

function TargetPhrase({ phrase }) {
  return (
    <h1>{phrase}</h1>
  );
}

function MyBox() {
  const { foo } = useContext(AppContext);

  return (

    <div className='MyBox'>
      <TargetPhrase phrase={foo} />
    </div>
  );
}

export default MyBox;
