import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { AppContext } from '../../AppContext';
import { WorkbookFileField } from './WorkbookFileField';

export default function FormDialog({ isOpen }) {
  const ctx = React.useContext(AppContext);

  const [data, setData] = React.useState({});

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    ctx.setWorkbookData(data);
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Load Workbook</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please specify a source for your workbook.
          </DialogContentText>
          <WorkbookFileField onClose={setData}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" data-testid="load">
            Load
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
