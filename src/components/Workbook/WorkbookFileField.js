import React from 'react';

import {
  Icon,
  Button
} from '@material-ui/core';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { WorkbookService } from './WorkbookService';

export const NOOP = () => {};

export const WorkbookFileField = ({ onClose = NOOP }) => {
  const fileRef = React.useRef(null);

  const [ data, setData ] = React.useState({
    fileLoaded: false
  });

  const onChange = async (e) => {
    const f = e.target.files[0];

    try {
      const data = await WorkbookService.loadFromFile(f);

      setData({
        ...data,
        fileLoaded: true
      });

      onClose(data);
    } catch(e) {
      window.alert("Invalid workbook:" + e.message);
    }
  };

  return (
    <React.Fragment>
      <Button variant="contained" color="primary" onClick={() => {
        fileRef.current.click();
      }}>
        Choose File
      </Button>

      { data.fileLoaded &&
          <Icon color='primary' data-testid='file-loaded'>
            <CheckCircleIcon />
          </Icon>
      }

      <input
        hidden
        ref={fileRef}
        data-testid='file'
        name='file'
        type='file'
        accept="application/json"
        onChange={onChange}/>
    </React.Fragment>
  );
};
