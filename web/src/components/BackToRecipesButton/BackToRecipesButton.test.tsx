import { render } from '@redwoodjs/testing/web'

import BackToRecipesButton from './BackToRecipesButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BackToRecipesButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BackToRecipesButton />)
    }).not.toThrow()
  })
})
