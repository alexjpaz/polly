import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

import { WorkbookFileField }  from './WorkbookFileField';

test('renders', () => {
  const { getByTestId } = render(<WorkbookFileField />);
  const fileElement = getByTestId(/file/i);
  expect(fileElement).toBeInTheDocument();
});

test('renders', async () => {
  const onClose = jest.fn();
  const { getByTestId, findByTestId } = render(<WorkbookFileField onClose={onClose} />);
  const fileElement = getByTestId(/file/i);
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

  await findByTestId(/file-loaded/);

  expect(onClose).toHaveBeenCalledWith(fakeContent);
});





