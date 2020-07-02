import React from 'react'
import { shallow } from 'enzyme'

import Home from './Home'

describe('Home', () => {
  it('renders loading', () => {
    expect(shallow(<Home />)).toMatchSnapshot()
  })

  it('renders data', () => {
    const wrapper = shallow(<Home/>)

    wrapper.setState({
      market: {
        msg: 'success',
        data: {
          items: [{
            id: 1,
            product: 'Product',
            price: 2,
            msrp: 1,
            soldOut: false,
          }],
        },
      },
    })

    expect(wrapper).toMatchSnapshot()
  })

  xit('componentDidMount', () => {
    
  })
})
