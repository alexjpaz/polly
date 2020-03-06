import React from 'react';

import { action } from '@storybook/addon-actions';

import { AppContext } from '../../AppContext';
import LoadWorkbookDialog from './LoadWorkbookDialog';

export function JustTheDialog() {
  const ctx = {
    setWorkbookData: action('setWorkbookData')
  };

  return (
    <AppContext.Provider value={ctx}>
        <LoadWorkbookDialog />
    </AppContext.Provider>
  )
};

export default {
  title: 'components/Workbook/LoadWorkbookDialog',
};


