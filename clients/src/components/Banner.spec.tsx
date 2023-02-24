import React from 'react';
import { render } from '@testing-library/react';
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
    const { container } = render(<Banner backgroundVideo={mockSrc} />);
  
    
    const videoElement = container.querySelector('video');
    console.log(videoElement);
    
    // expect(videoElement.src).toContain(mockSrc);
    expect(videoElement.autoplay).toBe(true);
    expect(videoElement.muted).toBe(true);
    expect(videoElement.loop).toBe(true);
  });
});