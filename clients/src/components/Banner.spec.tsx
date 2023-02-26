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
    it('renders the background video', () => {
    const mockSrc = 'test_video.mp4';
    const { container } = render(<Banner />);
  
    
    const backgroundVideoElement = screen.getByRole('video');
    console.log(backgroundVideoElement);
    
    // expect(videoElement.src).toContain(mockSrc);
    expect(backgroundVideoElement).toHaveAttribute('src', '../media/background.mp4');
  });
});