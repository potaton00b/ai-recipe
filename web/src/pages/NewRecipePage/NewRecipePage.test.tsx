import { render } from '@redwoodjs/testing/web'

import NewRecipePage from './NewRecipePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewRecipePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewRecipePage />)
    }).not.toThrow()
  })
})
