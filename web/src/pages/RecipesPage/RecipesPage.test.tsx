import { render } from '@redwoodjs/testing/web'

import RecipesPage from './RecipesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RecipesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecipesPage />)
    }).not.toThrow()
  })
})
