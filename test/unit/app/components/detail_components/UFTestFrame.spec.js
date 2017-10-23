import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'
import PieChart from 'react-simple-pie-chart'
import Arrow from 'react-arrow'
import UFTestFrame from '../../../../../app/components/detail_components/UFTestFrame'
import Pie from '../../../../../app/components/piechart/Pie'
describe('<UFTestFrame />', () => {

    let props
    beforeEach(() => {
        props = {
            item: {                
                "unittest": {
                    "status": "Accepted",
                    "testpass": 73,
                    "codecover": 84
                }
            },
            itemFontColor: {
                'metrics': "label-color-pending",
                "build": 'label-color-running',
                "ut": 'label-color-pending',
                'ft': 'label-color-pending'
            }
        }
    })

    it('should render Pie component if the unittest status is accepted', () => {
        const wrapper = shallow(<UFTestFrame {...props} unit={true}/>)
        expect(wrapper.find(Pie).length).toBe(1);
    });

})