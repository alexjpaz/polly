import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { WorkbookSourceSelector }  from './WorkbookSourceSelector';

describe('renders', () => {
  let getByText;

  beforeEach(() => {
    ({
      getByText
    } = render(<WorkbookSourceSelector />));
  });

  test('has file', () => {
    const element = getByText(/File/i);
    expect(element).toBeInTheDocument();
  });

  test('has sample', () => {
    const element = getByText(/Sample$/i);
    expect(element).toBeInTheDocument();
  });
});


