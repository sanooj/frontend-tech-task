import React from 'react';
import { render } from '@testing-library/react';
import Footer from './index';

test('renders the Footer', () => {
  const { findAllByTestId } = render(<Footer />);
  const footer = findAllByTestId('footer')
  expect(footer).toBeDefined();
});