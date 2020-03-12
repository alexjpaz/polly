import React from 'react';

import { render } from '@testing-library/react';

import PhraseNavigator from './PhraseNavigator';

test('renders', () => {
  const { getByText } = render(
    <PhraseNavigator
      phrases={[]}
    />
  );
  const element = getByText(/Next/i);
  expect(element).toBeInTheDocument();
});


