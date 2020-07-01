import React from 'react'
import { shallow } from 'enzyme'

import Page from './Page'

describe('Page', () => {
  it('renders', () => {
    expect(shallow(<Page>child</Page>)).toMatchSnapshot()
  })
})
