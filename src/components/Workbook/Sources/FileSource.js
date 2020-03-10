import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FolderIcon from '@material-ui/icons/Folder';

import { WorkbookService } from '../WorkbookService';

export function FileSource({ onSourceChange }) {
  const fileFieldRef = React.useRef(null);

  const onClick = () => {
    fileFieldRef.current.click();
  };

  const onFileChange = async (e) => {
    const f = e.target.files[0];

    try {
      const data = await WorkbookService.loadFromFile(f);

      onSourceChange(data);
    } catch(e) {
      window.alert("Invalid workbook:" + e.message);
    }

  };

  return (
    <ListItem button onClick={onClick}>
      <ListItemIcon>
        <FolderIcon />
      </ListItemIcon>
      <ListItemText primary='File' secondary='Load a workbook from your local system' />

      <input
        hidden
        ref={fileFieldRef}
        data-testid='file'
        name='file'
        type='file'
        data-file-loaded={false}
        accept="application/json"
        onChange={onFileChange}/>
    </ListItem>
  );
}


