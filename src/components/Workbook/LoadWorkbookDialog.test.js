import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';

import { AppContext } from '../../AppContext';
import LoadWorkbookDialog from './LoadWorkbookDialog';

test('renders', () => {
  const { getByText } = render(<LoadWorkbookDialog isOpen={true} />);
  const linkElement = getByText(/Load Workbook/i);
  expect(linkElement).toBeInTheDocument();
});

describe('dialog', () => {
  let getByTestId;
  let onClose;
  let ctx;

  beforeEach(() => {
    onClose = jest.fn();

    ctx = {
      setWorkbookData: jest.fn()
    };

    ({ getByTestId } = render(
      <AppContext.Provider value={ctx}>
        <LoadWorkbookDialog isOpen={true} onClose={onClose} />
      </AppContext.Provider>
    ));
  });

  it('has a file element', () => {
    const fileElement = getByTestId("file");
    expect(fileElement).toBeInTheDocument();
  });

  it('has a load button', () => {
    const element = getByTestId("load");
    expect(element).toBeInTheDocument();
  });

  it('has a cancel button', () => {
    const element = getByTestId("cancel");
    expect(element).toBeInTheDocument();

  });

  it('cancel button clears the modal', () => {
    const element = getByTestId("cancel");
    expect(element).toBeInTheDocument();

    fireEvent.click(element);

    expect(onClose).toHaveBeenCalled();
  });
});
