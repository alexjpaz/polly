import React from 'react';

import IconButton from '@material-ui/core/IconButton';

import ImportContactsIcon from '@material-ui/icons/ImportContacts';

import LoadWorkbookDialog from './LoadWorkbookDialog';

export const LoadWorkbookLink = () => {
  const [open, setOpen] = React.useState(false);

  const onClick = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <IconButton onClick={onClick} data-testid='import-contacts-button'>
      <ImportContactsIcon />
      <LoadWorkbookDialog isOpen={open} onClose={handleClose} />
    </IconButton>
  )
};

export default LoadWorkbookLink;
