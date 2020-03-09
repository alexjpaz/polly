import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { AppContext } from '../../AppContext';
import { WorkbookFileField } from './WorkbookFileField';

export default function LoadWorkbookDialog({ isOpen = false, onClose }) {
  const ctx = React.useContext(AppContext);

  const [ workbookData , setWorkbookData ] = React.useState(null);

  const handleClose = (e) => {
    e.stopPropagation();
    ctx.setWorkbookData(workbookData);
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
          <WorkbookFileField onClose={setWorkbookData}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="default" data-testid="canel" >
            Cancel
          </Button>
          <Button onClick={handleClose} disabled={!workbookData} color="primary" data-testid="load">
            Load
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
