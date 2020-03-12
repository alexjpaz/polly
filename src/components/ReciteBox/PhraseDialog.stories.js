import React from 'react';

import { action } from '@storybook/addon-actions';

import PhraseDialog from './PhraseDialog';

import data from '../../datasources/foo.json';

export default {
  title: 'components/ReciteBox/PhraseDialog',
};

export const withPhrases = () => (
  <PhraseDialog
    open={true}
    phrases={data.phrases}
    onCancel={action("cancel")}
    onSelectItem={action("selectItem")} />
);

