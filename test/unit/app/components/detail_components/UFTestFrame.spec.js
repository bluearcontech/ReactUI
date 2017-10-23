import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'
import Arrow from 'react-arrow'
import UFTestFrame from '../../../../../app/components/detail_components/UFTestFrame'
import Pie from '../../../../../app/components/piechart/Pie'
describe('<UFTestFrame />', () => {

    let props
    beforeEach(() => {
        props = {            
            itemFontColor: {
                'metrics': "label-color-pending",
                "build": 'label-color-running',
                "ut": 'label-color-pending',
                'ft': 'label-color-pending'
            }
        }
    })

    it('should render Pie component if the unittest status is accepted', () => {
        const item = {
            "unittest": {
                "status": "Accepted",
                "testpass": 73,
                "codecover": 84
            }
        }
        const wrapper = shallow(<UFTestFrame {...props} unit={true} item={item} />)
        expect(wrapper.find(Pie).length).toBe(1);
    });

    it('should render Pie component if the functional status is accepted', () => {
        const item = {
            "functionaltest": {
                "status": "Accepted",
                "testpass": 73,
                "codecover": 84
            }
        }
        const wrapper = shallow(<UFTestFrame {...props} unit={false} item={item} />)
        expect(wrapper.find(Pie).length).toBe(1);
    });

})