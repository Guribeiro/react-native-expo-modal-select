import { render } from '@testing-library/react-native';
import React from 'react';
import ModalSelect, { Item } from '../index';

const items: Item[] = [
  {
    label: 'item 1',
    value: 'item 1',
  },
  {
    label: 'item 2',
    value: 'item 2',
  },
  {
    label: 'item 3',
    value: 'item 3',
  },
];

let value: string;
let placeholder: string;
let error: string;

describe('placeholder text', () => {
  beforeEach(() => {
    value = '';
    placeholder = 'Select an item';
    error = 'There is an error';
  });

  it('should be able to render placeholder when there is no item selected', async () => {
    const { getByTestId } = render(
      <ModalSelect
        items={items}
        value={value}
        placeholder={placeholder}
        onChange={(v) => console.log(v)}
      />
    );

    const placeholderText = getByTestId('text-placeholder');

    expect(placeholderText.props.children).toBe(placeholder);
  });
});

describe('error text', () => {
  beforeEach(() => {
    value = '';
    placeholder = 'Select an item';
    error = 'There is an error';
  });

  it('should be able to render error message', async () => {
    const { getByTestId } = render(
      <ModalSelect
        items={items}
        value={value}
        error={error}
        placeholder={placeholder}
        onChange={(v) => console.log(v)}
      />
    );

    const errorText = getByTestId('text-error');

    expect(errorText).toBeTruthy();
    expect(errorText.props.children).toBe(error);
  });
});
