import React from 'react';

import { AppContext } from '../../AppContext';

import IconButton from '@material-ui/core/IconButton';

import ImportContactsIcon from '@material-ui/icons/ImportContacts';

export const LoadWorkbookLink = () => {
  const ctx = React.useContext(AppContext);

  const onClick = React.useEffect(() => {
    ctx.workbookLoaderDialogIsOpen = true;
  });

  return (
    <IconButton onClick={onClick}>
      <ImportContactsIcon />
    </IconButton>
  )
};

export default LoadWorkbookLink;
