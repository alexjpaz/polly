import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

import { AppContext } from '../../AppContext';
import LoadWorkbookLink from './LoadWorkbookLink';

test('renders link', () => {
  let state = {
  };

  const { getByTestId, getByText } = render(
    <AppContext.Provider value={state}>
      <LoadWorkbookLink />
    </AppContext.Provider>
  );

  fireEvent.click(getByTestId('import-contacts-button'));

  const dialogElement = getByText(/Load Workbook/);
  expect(dialogElement).toBeInTheDocument();
});


