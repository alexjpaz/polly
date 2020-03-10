import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

import sampleData from '../../../datasources/foo.json';

export function SampleSource({ onSourceChange }) {
  const onClick = (e) => {
    e.stopPropagation();
    onSourceChange(sampleData);
  };

  return (
    <ListItem button onClick={onClick}>
      <ListItemIcon>
        <StarBorderOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary='Sample' secondary='Load the default sample workbook (13 sentences in Spanish)' />
    </ListItem>
  );
}
