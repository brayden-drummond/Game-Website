import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { gamesData } from '../games-data/games-data'
import Games from './Games'

describe('Games', () => {
  it('renders the correct game data', () => {
    const gamesDataMock = [
      { name: 'Game 1', image: 'game1.png', path: '/game-1' },
      { name: 'Game 2', image: 'game2.png', path: '/game-2' },
    ]

    // jest.spyOn(gamesData, 'map').mockReturnValue(gamesDataMock)

    // render(<Games />, { wrapper: MemoryRouter })

    // gamesDataMock.forEach((game) => {
    //   expect(screen.getByText(game.name)).toBeInTheDocument()
    //   expect(screen.getByAltText(game.name)).toHaveAttribute('src', game.image)
    //   expect(screen.getByAltText(game.name).closest('a')).toHaveAttribute(
    //     'href',
    //     game.path
    //   )
    // })
  })
  // it('navigates to the correct game page on click', () => {
  //   const gamesDataMock = [
  //     { name: 'Game 1', image: 'game1.png', path: '/game-1' },
  //     { name: 'Game 2', image: 'game2.png', path: '/game-2' },
  //   ];

  //   jest.spyOn(gamesData, 'map').mockReturnValue(gamesDataMock);

  //   render(<Games />, { wrapper: MemoryRouter });

  //   const gameLink = screen.getByAltText(gamesDataMock[0].name).closest('a');

  //   fireEvent.click(gameLink);

  //   expect(screen.getByText(`You are now playing ${gamesDataMock[0].name}`)).toBeInTheDocument();
  //   expect(window.location.pathname).toBe(gamesDataMock[0].path);
  // });
})
