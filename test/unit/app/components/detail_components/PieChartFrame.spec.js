import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'
import PieChart from 'react-simple-pie-chart'
import Pie from '../../../../../app/components/piechart/Pie'
import PieChartFrame from '../../../../../app/components/detail_components/PieChartFrame'
describe('<PieChartFrame />', () => {

    let props
    beforeEach(() => {
        props = {
            item: {
                "unittest": {
                    "status": "pending"
                },
                "functionaltest": {
                    "status": "accepted"
                }
            }
        }
    })

    it('should render 1 Pie component if the functional status is accepted and unit is false', () => {
        const wrapper = shallow(<PieChartFrame {...props} unit={false}/>)
        expect(wrapper.find('Pie').length).toBe(1);
    });

    it('should render empty component if the unittest status is pending', () => {
        const wrapper = shallow(<PieChartFrame {...props} unit={true}/>)
        expect(wrapper.find('Pie').length).toBe(0);
    });
})