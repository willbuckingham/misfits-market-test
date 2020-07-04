import React from 'react'
import { shallow } from 'enzyme'

import Item, { calcSavings } from './Item'

describe('Item', () => {
  let props

  beforeAll(() => {
    props = {
      id: 1,
      product: 'Product',
      price: 1,
      msrp: 2,
      soldOut: false,
      onAdd: jest.fn(),
    }
  })

  it('renders', () => {
    expect(shallow(<Item { ...props } />)).toMatchSnapshot()
  })

  it('renders sold out', () => {
    expect(shallow(<Item { ...props } soldOut={true} />)).toMatchSnapshot()
  })
})

describe('calcSavings', () => {
  it('is equal or more expensive', () => {
    expect(calcSavings(5, 5)).toBe(0)
    expect(calcSavings(4, 5)).toBe(0)
  })

  it('should round to 20', () => {
    expect(calcSavings(5, 4)).toBe(20)
  })
})
