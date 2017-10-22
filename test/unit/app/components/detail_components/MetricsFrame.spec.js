import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'
import PieChart from 'react-simple-pie-chart'
import Arrow from 'react-arrow'
import MetricsFrame from '../../../../../app/components/detail_components/MetricsFrame'
describe('<MetricsFrame />', () => {

    let props, param
    beforeEach(() => {
        props = {
            item: {
                "metrics": {
                    "status": "Accepted",
                    "test": 89,
                    "maintainability": 36,
                    "security": 94,
                    "workmanship": 69
                },
                "unittest": {
                    "status": "Pending"
                },
                "functionaltest": {
                    "status": "Accepted"
                }
            }
        }
    })

    it('should render 4 Arrow components', () => {
        const wrapper = shallow(<MetricsFrame {...props} />)
        expect(wrapper.find('Arrow').length).toBe(4);
    });
})