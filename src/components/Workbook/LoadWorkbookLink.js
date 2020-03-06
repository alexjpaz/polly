import React from 'react';

import IconButton from '@material-ui/core/IconButton';

import ImportContactsIcon from '@material-ui/icons/ImportContacts';

export const LoadWorkbookLink = () => {
  const onClick = () => {
    alert(1);
  };

  return (
    <IconButton onClick={onClick}>
      <ImportContactsIcon />
    </IconButton>
  )
};

export default LoadWorkbookLink;
