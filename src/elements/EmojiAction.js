import React from 'react';

import './EmojiAction.css';

import Button from '@material-ui/core/Button';

function EmojiAction({ emoji, label, action }) {
  return (
    <Button variant="contained" color="primary" onClick={ action }>
        { emoji }
    </Button>
  );
}

export default EmojiAction;
