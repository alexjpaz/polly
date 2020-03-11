import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { DefaultAppContextProvider } from '../../AppContext';
import MyBox from './MyBox';

describe('default', () => {

  let getByText;

  beforeEach(() => {
    ({ getByText } = render(
      <DefaultAppContextProvider>
        <MyBox />
      </DefaultAppContextProvider>
    ));
  });

  test('a phrase', () => {
    // TODO use some injected phrases
    const element = getByText(/The apple is red/i);
    expect(element).toBeInTheDocument();
  });

  test('navigation', () => {
    // TODO use some injected phrases
    const element = getByText(/Next/i);
    expect(element).toBeInTheDocument();

    fireEvent.click(element);

    // TODO use some injected phrases
    const phraseElement = getByText(/It is John's apple/i);
    expect(phraseElement).toBeInTheDocument();
  });
});


