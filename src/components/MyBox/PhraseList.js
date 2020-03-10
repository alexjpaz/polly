import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export function PhraseItem({ phrase }) {
  return (
    <ListItem button>
      <ListItemText primary={phrase.target} secondary={phrase.source} />
    </ListItem>
  );
}

export default function PhraseList({ phrases, onSelectItem }) {

  const handleClick = (phrase) => {
    onSelectItem(phrase);
  };

  const items = phrases.map((phrase) => (
    <div onClick={e => handleClick(phrase)}>
      <PhraseItem phrase={phrase}  />
    </div>
  ));

  return (
    <List component="nav">
      {items}
    </List>
  );
}


