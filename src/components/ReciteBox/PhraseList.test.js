import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import PhraseList from './PhraseList';

import sample from '../../datasources/foo.json';

test('renders', () => {
  const { getByText } = render(
    <PhraseList
      phrases={sample.phrases}
    />
  );
  const element = getByText(/The apple is red/i);
  expect(element).toBeInTheDocument();
});

test('can select a phrase', () => {
  const onSelectItem = jest.fn();

  const expectedPhrase = sample.phrases[1];

  const { getByText } = render(
    <PhraseList
      onSelectItem={onSelectItem}
      phrases={sample.phrases}
    />
  );

  const element = getByText(expectedPhrase.source);
  expect(element).toBeInTheDocument();

  fireEvent.click(element);

  expect(onSelectItem).toHaveBeenCalledWith(expectedPhrase, 1);
});
