import React from 'react'
import { render } from '@testing-library/react'
import { shallow, mount } from 'enzyme'
import App from './App'

describe('app', () => {
  xit('renders learn react link', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
  })

  it('shallows', () => {
    const wrapper = shallow(<App />)

    console.log(wrapper.debug())

    expect(wrapper).toMatchSnapshot()
  })

  it('mounts', () => {
    const wrapper = mount(<App />)

    console.log(wrapper.debug())

    expect(wrapper).toMatchSnapshot()
  })
})
