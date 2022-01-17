import React from 'react'
import { shallow } from 'enzyme'
import Layout from '../../components/Layout'

test('Should render layout component page', () => {
    const wrapper = shallow(<Layout />)
    expect(wrapper).toMatchSnapshot()
    // expect(wrapper.find('h1').text()).toBe('Expensify')
})
