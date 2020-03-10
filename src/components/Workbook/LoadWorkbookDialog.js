import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { AppContext } from '../../AppContext';
import { WorkbookSourceSelector } from './WorkbookSourceSelector';

export function LoadWorkbookDialog({ isOpen = false, onClose }) {
  const ctx = React.useContext(AppContext);

  const onSourceChange = (data) => {
    ctx.setWorkbookData(data);
    onClose();
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <React.Fragment>
      <Dialog open={isOpen} onClose={handleCancel} aria-labelledby="form-dialog-title">
        <DialogTitle id="load-workbook-dialog">Load Workbook</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please specify a source for your workbook.
          </DialogContentText>
          <WorkbookSourceSelector onSourceChange={onSourceChange} />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default function DefaultLoadWorkbookDialog({ isOpen = false, onClose, children }) {
  return (
    <LoadWorkbookDialog isOpen={isOpen} onClose={onClose}>
      {children}
    </LoadWorkbookDialog>
  );
}
