import React from 'react'
import { shallow } from 'enzyme'

import Item, { formatCurrency, calcSavings } from './Item'

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

describe('formatCurrency', () => {
  it('should format', () => {
    expect(formatCurrency(0)).toBe('$0.00')
    expect(formatCurrency(1)).toBe('$1.00')
    expect(formatCurrency(1.5)).toBe('$1.50')
    expect(formatCurrency(1.55)).toBe('$1.55')
    expect(formatCurrency(1.555)).toBe('$1.55')
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
