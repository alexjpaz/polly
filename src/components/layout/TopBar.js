import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import PollyImage from '../../logo192.png';
import GitHubLink from '../GitHubLink';

import LoadWorkbookLink from '../Workbook/LoadWorkbookLink';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#333333"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function TopBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Box mr={1}>
            <img alt='brand logo' style={{width: "1.25rem"}} src={PollyImage} />
          </Box>
          <Typography variant="h6" className={classes.title}>
              Polly
          </Typography>
          <LoadWorkbookLink />
          <GitHubLink />
        </Toolbar>
      </AppBar>
    </div>
  );
}

