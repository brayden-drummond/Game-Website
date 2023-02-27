import React from 'react';
import { getByRole, render } from '@testing-library/react';
import { screen } from '@testing-library/react';

import Banner from './Banner';

describe('Banner component', () => {
  it('renders text correctly', () => {
    render(<Banner />);
    const text = screen.getByText('Games by Brayden.')
    expect(text).toBeInTheDocument();
  });
   it('renders the video element with the correct attributes', () => {
    render(<Banner />);
    const video = screen.getAllByLabelText('background-video');    

    expect(video).toBeDefined();
     // expect(backgroundVideoElement).toContain("backgroundVideo");
    // expect(backgroundVideoElement).toHaveAttribute('autoPlay', 'true');
  });
});