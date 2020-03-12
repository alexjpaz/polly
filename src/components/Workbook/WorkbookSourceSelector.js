import React from 'react';
import List from '@material-ui/core/List';

import { SampleSource } from './Sources/SampleSource';
import { FileSource } from './Sources/FileSource';
import { UrlSource } from './Sources/UrlSource';
import { RegistrySource } from './Sources/RegistrySource';

export function WorkbookSourceSelector({ onSourceChange }) {
  return (
    <List>
      <SampleSource onSourceChange={onSourceChange} />
      <RegistrySource onSourceChange={onSourceChange} />
      <UrlSource onSourceChange={onSourceChange} />
      <FileSource onSourceChange={onSourceChange} />
    </List>
  );
}

export default WorkbookSourceSelector;
