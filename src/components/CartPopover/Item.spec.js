import React from 'react'
import { shallow } from 'enzyme'

import Item from './Item'

describe('Item', () => {
  let props

  beforeAll(() => {
    props = {
      product: 'Product',
      price: 1,
      quantity: 2,
    }
  })

  it('renders', () => {
    expect(shallow(<Item { ...props } />)).toMatchSnapshot()
  })
})
