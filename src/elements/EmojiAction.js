import React from 'react';

import './EmojiAction.css';

function EmojiAction({ emoji, label, action }) {
  return (
    <div className='EmojiAction'>
      <a href="#true" onClick={ action }>
        <span role="img" aria-label={ label }>{ emoji }</span>
      </a>
    </div>
  );
}

export default EmojiAction;
