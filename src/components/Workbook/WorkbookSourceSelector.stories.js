import React from 'react';

import { action } from '@storybook/addon-actions';

import WorkbookSourceSelector from './WorkbookSourceSelector';

import Box from '@material-ui/core/Box';

export function Default() {
  return (
    <Box m={1}>
      <WorkbookSourceSelector onSourceChange={action("onSourceChange")}/>
    </Box>
  )
};

export default {
  title: 'components/Workbook/WorkbookSourceSelector',
};


