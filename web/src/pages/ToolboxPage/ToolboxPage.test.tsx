import { render } from '@redwoodjs/testing/web'

import ToolboxPage from './ToolboxPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ToolboxPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ToolboxPage id={'42'} />)
    }).not.toThrow()
  })
})
