import { render } from '@redwoodjs/testing/web'

import PreferencesPage from './PreferencesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PreferencesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PreferencesPage />)
    }).not.toThrow()
  })
})
