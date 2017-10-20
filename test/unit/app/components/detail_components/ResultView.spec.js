import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'

import ResultView from '../../../../../app/components/detail_components/ResultView'

describe('<ResultView />', () => {

    let props
    beforeEach(() => {
        props = {
            item: {
                "state": "pending"
            }
        }
    })

    it('should render empty component if the state is pending', () => {
        const wrapper = shallow(<ResultView {...props} />)
        expect(wrapper.find('h4').length).toBe(0);
    });

    it('should render empty component if the state is pending', () => {
        const wrapper = shallow(<ResultView {...props} />)
        expect(wrapper.find('button').length).toBe(0);
    });

})