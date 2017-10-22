import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'
import ItemProcessFrame from '../../../../../app/components/detail_components/ItemProcessFrame'
import MetricsFrame from '../../../../../app/components/detail_components/MetricsFrame'
import PieChartFrame from '../../../../../app/components/detail_components/PieChartFrame'

describe('<ItemProcessFrame />', () => {

    let props
    beforeEach(() => {
        props = {
            item: {
                "build": "Rejected",
                "metrics": {
                    "status": "Running"
                },
                "unittest": {
                    "status": "Pending"
                },
                "functionaltest": {
                    "status": "Accepted"
                }
            },
            itemFontColor: {
                'metric': "red",
                "build": "blue",
                "ut": "white",
                'ft': "green"
            }
        }
    })

    it('should render MetricsFrame component if the name is Metrics', () => {
        const wrapper = shallow(<ItemProcessFrame {...props} name="Metrics" />)
        expect(wrapper.find('MetricsFrame').length).toBe(1);
    });

    it('should render one img component if the name is Build', () => {
        const wrapper = shallow(<ItemProcessFrame {...props} name="Build"/>)
        expect(wrapper.find('img').length).toBe(1);
    });

    it('should render one PieChartFrame component if the name is Build', () => {
        const wrapper = shallow(<ItemProcessFrame {...props} name="Unit Test"/>)
        expect(wrapper.find('PieChartFrame').length).toBe(1);
    });

})