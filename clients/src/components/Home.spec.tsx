import React from 'react';
import { screen, render } from '@testing-library/react';
import Home from './Home';
import { MemoryRouter } from 'react-router-dom';

test('renders Games component', () => {
const { container } = render(<Home />, { wrapper: MemoryRouter });
  // const gamesComponent = screen.getAllByTestId('games-container');
  expect(container).toBeTruthy();
});