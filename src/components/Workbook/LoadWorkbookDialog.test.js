import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

import { AppContext } from '../../AppContext';
import LoadWorkbookDialog from './LoadWorkbookDialog';

test('renders', () => {
  const { getByText } = render(<LoadWorkbookDialog />);
  const linkElement = getByText(/Load Workbook/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders', () => {
  const { getByText } = render(<LoadWorkbookDialog />);
  const linkElement = getByText(/Load Workbook/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', async ( ) => {
  const ctx = {
    setWorkbookData: jest.fn()
  };

  const { getByTestId } = render(
    <AppContext.Provider value={ctx}>
      <LoadWorkbookDialog />
    </AppContext.Provider>
  );

  const fileElement = getByTestId("file");
  expect(fileElement).toBeInTheDocument();

  const fakeContent = {
    "foo": "bar"
  };

  const fakeFile = new File([JSON.stringify(fakeContent)], "foo.txt", {
    type: "text/plain",
  });

  fireEvent.change(fileElement, {
    target: {
      files: [fakeFile]
    }
  });

  const loadButton = getByTestId("load");
  expect(loadButton).toBeInTheDocument();

  fireEvent.click(loadButton);

  expect(ctx.setWorkbookData).toHaveBeenCalled();
});
