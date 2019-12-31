import React from 'react';

import './GitHubLink.css';

import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

const projectURL = "https://github.com/alexjpaz-playground/polly";

export const GitHubLink = () => (
  <IconButton href={projectURL} target={"_blank"}>
    <GitHubIcon />
  </IconButton>
);

export default GitHubLink;
