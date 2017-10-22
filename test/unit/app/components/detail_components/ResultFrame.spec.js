import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'
import ResultFrame from '../../../../../app/components/detail_components/ResultFrame'

describe('<ResultFrame />', () => {

    let props
    beforeEach(() => {
        props = {
            item: {
                "state": "Pending"
            }
        }
    })

    it('should render empty component if the state is pending', () => {
        const wrapper = shallow(<ResultFrame {...props} />)
        expect(wrapper.find('h4').length).toBe(0);
    });

    it('should render empty component if the state is pending', () => {
        const wrapper = shallow(<ResultFrame {...props} />)
        expect(wrapper.find('button').length).toBe(0);
    });

})