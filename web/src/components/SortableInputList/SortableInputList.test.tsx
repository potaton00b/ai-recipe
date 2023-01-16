import { render } from '@redwoodjs/testing/web'

import SortableInputList from './SortableInputList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SortableInputList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SortableInputList />)
    }).not.toThrow()
  })
})
