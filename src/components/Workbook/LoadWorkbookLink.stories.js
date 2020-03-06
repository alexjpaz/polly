import React from 'react';

import { AppContext } from '../../AppContext';
import LoadWorkbookLink from './LoadWorkbookLink';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    background: "white"
  }
});

export default {
  title: 'components/Workbook/LoadWorkbookLink',
};

export const Fzoo = () => (
  <Box className={useStyles().root}>
    <LoadWorkbookLink />
  </Box>
);

