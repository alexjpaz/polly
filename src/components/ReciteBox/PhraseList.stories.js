import React from 'react';

import { action } from '@storybook/addon-actions';

import PhraseList from './PhraseList';

import data from '../../datasources/foo.json';

export default {
  title: 'components/ReciteBox/PhraseList',
};

export const withPhrases = () => (
  <PhraseList phrases={data.phrases} onSelectItem={action("selectItem")} />
);

