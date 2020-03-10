import React from 'react';

import { render, fireEvent, wait } from '@testing-library/react';

import {
  UrlLoader,
  UrlDialog,
  UrlSource,
} from './UrlSource';


describe('UrlDialog', () => {
  let getByLabelText;
  let getByText;

  beforeEach(() => {
    ({
      getByText,
      getByLabelText,
    } = render(
      <UrlSource
        />
    ));
  });

  it('should show a button', () => {
    const element = getByText(/^URL$/);
    expect(element).toBeInTheDocument();
  });

it('should show UrlDialog on click', () => {
    const element = getByText(/^URL$/);
    expect(element).toBeInTheDocument();

    fireEvent.click(element);

    const urlField = getByLabelText(/URL/);
    expect(urlField).toBeInTheDocument();
  });
});

describe('UrlLoader', () => {
  it('should load data', async () => {
    const input = {
      name: "some_data"
    };

    const encoded = btoa(JSON.stringify(input));

    const data = await UrlLoader(`data:application/json;base64,${encoded}`);

    expect(data.name).toEqual(input.name);
  });
});

describe('UrlDialog', () => {
  let getByTestId;
  let getByLabelText;
  let getByText;
  let onClose;
  let onLoad;

  beforeEach(() => {
    onClose = jest.fn();
    onLoad = jest.fn();

    ({
      getByTestId,
      getByLabelText,
      getByText,
    } = render(
      <UrlDialog
        open={true}
        onClose={onClose}
        onLoad={onLoad}
        />
    ));
  });

  it('should have a url field', () => {
    const element = getByLabelText(/URL/);
    expect(element).toBeInTheDocument();
  });

  it('should return data on submit', async () => {
    const urlField = getByTestId(/url/);
    expect(urlField).toBeInTheDocument();

    const input = {
      name: "some_data"
    };

    const encoded = `data:application/json;base64,${btoa(JSON.stringify(input))}`;

    fireEvent.change(urlField, {
      target: {
        value: encoded
      }
    });

    const submitButton = getByText(/Submit/);

    fireEvent.click(submitButton);

    await wait(() => expect(onLoad).toHaveBeenCalled());

    expect(onLoad).toHaveBeenCalledWith(input);
  });
});
