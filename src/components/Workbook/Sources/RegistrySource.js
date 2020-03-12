import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PublicIcon from '@material-ui/icons/Public';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import sampleData from '../../../datasources/foo.json';

export function RegistryDialog({ open, onClose, onLoad }) {
  const [ url, setUrl ] = React.useState(null);

  const submit = async (e) => {
    e.stopPropagation();

    try {
      onLoad({});
    } catch(e) {
      window.alert("Failed to load data from URL:" + e.message);
      throw e;
    }
  };

  return (
    <Dialog fullScreen={true} open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogContent>
        <List component="nav">
          <ListItem button>
            <ListItemText primary={1} secondary={2} />
          </ListItem>
        </List>
      </DialogContent>
    </Dialog>
  );
}



export function RegistrySource({ onSourceChange }) {
  const onClick = (e) => {
    e.stopPropagation();
    onSourceChange(sampleData);
  };

  return (
    <ListItem button onClick={onClick}>
      <ListItemIcon>
        <PublicIcon />
      </ListItemIcon>
      <ListItemText primary='Registry' secondary='Load workbooks from the public registry' />
      <RegistryDialog open={true} />
    </ListItem>
  );
}
