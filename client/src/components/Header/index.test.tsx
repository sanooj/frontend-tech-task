import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';

test('renders the Header text', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/home24/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the Input field in Header', () => {
    const container = render(<Header />);
    const input = container.findAllByTestId('HeaderInput');
    expect(input).toBeDefined();
  });
