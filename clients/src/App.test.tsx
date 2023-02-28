import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders app component', () => {
  const { container } = render(<App />, { wrapper: MemoryRouter });
  expect(container).toBeTruthy();
});
