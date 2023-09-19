import { render, screen } from '@testing-library/react'

import Home from '@/app/page'

describe('Home', () => {
    it('should have a heading', () => {
        render(<Home />) // Arrange

        const myElem = screen.getByRole('heading', {
            name: 'Hello World',
        }) // Act

        expect(myElem).toBeInTheDocument() // Assert
    })
})
