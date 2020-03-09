import React from 'react';

import { action } from '@storybook/addon-actions';

import { AppContext } from '../../AppContext';
import LoadWorkbookLink from './LoadWorkbookLink';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    background: "white"
  }
});

export function JustTheButton() {
  const styles = useStyles();

  const value = {
    setWorkbookData: action('setWorkbookData')
  };

  return (
    <AppContext.Provider value={value}>
      <Box className={styles.root}>
        <LoadWorkbookLink />
      </Box>
    </AppContext.Provider>
  )
};

export default {
  title: 'components/Workbook/LoadWorkbookLink',
};


