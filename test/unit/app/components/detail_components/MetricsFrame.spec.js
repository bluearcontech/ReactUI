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
                "unittest": {
                    "status": "pending"
                },
                "functionaltest": {
                    "status": "accepted"
                }
            }
        }
    })

    it('should render 4 Arrow components', () => {
        const wrapper = shallow(<MetricsFrame {...props}  />)
        expect(wrapper.find('Arrow').length).toBe(4);
    });
})