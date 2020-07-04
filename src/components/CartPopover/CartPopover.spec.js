import React from 'react'
import { shallow } from 'enzyme'

import CartPopover from './CartPopover'
import {
  IconButton,
  Popover,
} from '@material-ui/core'

describe('CartPopover', () => {
  let props

  beforeAll(() => {
    props = {
      cartItems: [],
    }
  })

  it('renders empty', () => {
    expect(shallow(<CartPopover { ...props } />)).toMatchSnapshot()
  })

  it('renders w/ item', () => {
    expect(shallow(<CartPopover { ...props } cartItems={[{ id: 1, product: 'p', price: 1, quantity: 2 }]} />)).toMatchSnapshot()
  })

  it('opens/closes popover', () => {
    const wrapper = shallow(<CartPopover { ...props } />)

    wrapper.find(IconButton).props().onClick({ currentTarget: 'mocktarget' })

    expect(wrapper.find(Popover).props().open).toBeTruthy()

    wrapper.find(Popover).props().onClose()

    expect(wrapper.find(Popover).props().open).toBeFalsy()
  })
})
