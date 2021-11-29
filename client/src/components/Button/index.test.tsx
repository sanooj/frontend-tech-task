import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';

test('renders the Button', () => {
  const { getByText } = render(<Button label="Add to cart"/>);
  const textElement = getByText(/Add to cart/i);
  expect(textElement).toBeInTheDocument();
});