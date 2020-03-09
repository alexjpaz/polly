import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';

import { AppContext } from '../../AppContext';
import LoadWorkbookDialog from './LoadWorkbookDialog';

test('renders', () => {
  const { getByText } = render(<LoadWorkbookDialog isOpen={true} />);
  const linkElement = getByText(/Load Workbook/i);
  expect(linkElement).toBeInTheDocument();
});

test('dialog loads a file', async ( ) => {
  const onClose = jest.fn();

  const ctx = {
    setWorkbookData: jest.fn()
  };

  const { getByTestId } = render(
    <AppContext.Provider value={ctx}>
      <LoadWorkbookDialog isOpen={true} onClose={onClose} />
    </AppContext.Provider>
  );

  const fileElement = getByTestId("file");
  expect(fileElement).toBeInTheDocument();

  const fakeContent = {
    "name": "example",
    "phrases": []
  };

  const fakeFile = new File([JSON.stringify(fakeContent)], "foo.json", {
    type: "application/json",
  });

  fireEvent.change(fileElement, {
    target: {
      files: [fakeFile]
    }
  });

  const loadButton = getByTestId("load");
  expect(loadButton).toBeInTheDocument();

  //await wait(() => expect(loadButton.disabled).toEqual(true));

  //fireEvent.click(loadButton);

  //await wait(() => expect(ctx.setWorkbookData).toHaveBeenCalled(), {
    //timeout: 14500
  //});
}, 15000);
