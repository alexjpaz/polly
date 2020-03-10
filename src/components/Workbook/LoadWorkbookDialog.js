import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import { AppContext } from '../../AppContext';
import { WorkbookFileField } from './WorkbookFileField';

export function WorkbookSources({ setWorkbookData }) {
  const [ sourceType, setSourceType ] = React.useState(null);

  const onSourceChange = () => {
  };

  return (
    <React.Fragment>
      <TextField
          id="workbook-source-selector"
          select
          label="Source"
          value={''}
          onChange={onSourceChange}
          helperText="Please select your workbook source"
        >
        <MenuItem key={"file"} value={"file"}>
          File
        </MenuItem>
        <MenuItem key={"file"} value={"file"}>
          File
        </MenuItem>
      </TextField>
      <Box m={1}>
        <WorkbookFileField onClose={setWorkbookData}/>
      </Box>
    </React.Fragment>
  );
}

export function LoadWorkbookDialog({ isOpen = false, onClose }) {
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
          <WorkbookSources setWorkbookData={setWorkbookData} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="default" data-testid="cancel" >
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

export default function DefaultLoadWorkbookDialog({ isOpen = false, onClose, children }) {
  return (
    <LoadWorkbookDialog isOpen={isOpen} onClose={onClose}>
      {children}
    </LoadWorkbookDialog>
  );
}
