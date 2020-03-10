import React from 'react';
import List from '@material-ui/core/List';

import { SampleSource } from './Sources/SampleSource';
import { FileSource } from './Sources/FileSource';

export function WorkbookSourceSelector({ onSourceChange }) {

  return (
    <List>
      <SampleSource onSourceChange={onSourceChange} />
      <FileSource onSourceChange={onSourceChange} />
    </List>
  );
}

export default WorkbookSourceSelector;
