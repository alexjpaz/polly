import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import PhraseList from './PhraseList';

export default function PhraseDialog({ open, phrases, handleClose }) {
  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
      <DialogTitle>Phrases</DialogTitle>
      <DialogContent>
        <PhraseList
          phrases={phrases}
          onSelectItem={handleClose}
          />
      </DialogContent>
    </Dialog>
  );
}
