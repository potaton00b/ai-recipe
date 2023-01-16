import { render } from '@redwoodjs/testing/web'

import MealPreferenceForm from './MealPreferenceForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MealPreferenceForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MealPreferenceForm />)
    }).not.toThrow()
  })
})
