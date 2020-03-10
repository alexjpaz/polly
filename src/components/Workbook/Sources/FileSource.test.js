import React from 'react';

import { render, fireEvent, wait } from '@testing-library/react';

import { FileSource }  from './FileSource';

describe('renders', () => {
  let getByText;
  let getByTestId;

  beforeEach(() => {
    ({
      getByText,
      getByTestId,
    } = render(<FileSource />));
  });

  test('has file text', () => {
    const element = getByText(/File/i);
    expect(element).toBeInTheDocument();
  });

  test('has file input', () => {
    const element = getByTestId(/file/i);
    expect(element).toBeInTheDocument();
  });
});

test('load file', async () => {
  const onSourceChange= jest.fn();

  const { getByTestId } = render(<FileSource onSourceChange={onSourceChange} />);

  const fileElement = getByTestId(/file/i);
  expect(fileElement).toBeInTheDocument();

  const fakeContent = {
    "name": "example",
    "phrases": []
  };

  const fakeFile = new File([JSON.stringify(fakeContent)], "foo.txt", {
    type: "text/plain",
  });

  fireEvent.change(fileElement, {
    target: {
      files: [fakeFile]
    }
  });

  await wait(() => expect(onSourceChange).toHaveBeenCalledWith(fakeContent));

});
