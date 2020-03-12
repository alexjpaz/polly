import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import PhraseList from './PhraseList';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "#333333",
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PhraseDialog({ open, phrases, onCancel, onSelectItem }) {
  const classes = useStyles();

  return (
    <Dialog fullScreen open={open} onClose={onCancel} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={onCancel} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Select Phrase
          </Typography>
        </Toolbar>
      </AppBar>
      <DialogContent>
        <PhraseList
          phrases={phrases}
          onSelectItem={onSelectItem}
          />
      </DialogContent>
    </Dialog>
  );
}
