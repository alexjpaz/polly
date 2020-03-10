import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LinkIcon from '@material-ui/icons/Link';
import TextField from '@material-ui/core/TextField';

export async function UrlLoader(url) {
  let data = null;

  data = await fetch(url)
    .then(r => r.json())
  ;

  return data;
}

export function UrlDialog({ open, onClose, onLoad }) {
  const [ url, setUrl ] = React.useState(null);

  const submit = async (e) => {
    e.stopPropagation();

    try {
      const data = await UrlLoader(url);
      onLoad(data);
    } catch(e) {
      window.alert("Failed to load data from URL:" + e.message);
      throw e;
    }
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Enter URL</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter a URL to load a workbook from.
        </DialogContentText>
        <TextField
            autoFocus
            margin="dense"
            id="url"
            label="URL"
            inputProps={{"data-testid":"url"}}
            type="url"
            onChange={(e) => setUrl(e.target.value)}
            onKeyUp={(e) => setUrl(e.target.value)}
            fullWidth
          />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={submit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export function UrlSource({ onSourceChange }) {
  const [ open, setOpen ] = React.useState(false);

  const onClick = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const onLoad = (data) => {
    setOpen(false);
    onSourceChange(data);
  };

  const onClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  return (
    <ListItem button onClick={onClick}>
      <ListItemIcon>
        <LinkIcon />
      </ListItemIcon>
      <ListItemText primary='URL' secondary='Load a workbook from a URL' />
      <UrlDialog open={open} onLoad={onLoad} onClose={onClose} />
    </ListItem>
  );
}
