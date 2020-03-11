import React from 'react';

import { action } from '@storybook/addon-actions';

import { PhraseNavigator } from './PhraseNavigator';

import data from '../../datasources/foo.json';

export default {
  title: 'components/MyBox/PhraseNavigator',
};

export const withPhrases = () => (
  <PhraseNavigator
    phrases={data.phrases}
    setCurrentPhrase={action("setCurrentPhrase")} />
);

