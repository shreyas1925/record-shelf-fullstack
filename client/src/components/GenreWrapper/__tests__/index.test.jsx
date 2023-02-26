import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import GenreWrapper from ".."

describe('Genre Wrapper', () => {

    const mockData = {
        images: 'https://i.scdn.co/image/ab67706f00000003a0b8f2b0c1b2b8c1c2b3b4b5',
        types: ['song1', 'song2', 'song3'],
        text: 'text',
        likes: [1, 2, 3],
        counts: [4, 5, 6]
    }

    it('should render without crashing', () => {
        render(<GenreWrapper images={mockData.images} types={mockData.types}
             text={mockData.text}
             likes={mockData.likes} counts={mockData.counts}
        />)
        const genreWrapper = screen.getByTestId('genre-wrapper')
        expect(genreWrapper).toBeInTheDocument()
    })
})