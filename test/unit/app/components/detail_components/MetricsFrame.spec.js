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
            itemFontColor: {
                'metrics': "label-color-pending",
                "build": 'label-color-running',
                "ut": 'label-color-pending',
                'ft': 'label-color-pending'
            }
        }
    })

    it('should not render Arrow components if the metrics status is pending', () => {
        const item = {
            "metrics": {
                "status": "Pending",
                "test": 89,
                "maintainability": 36,
                "security": 94,
                "workmanship": 69
            }
        }
        const wrapper = shallow(<MetricsFrame {...props} item={item} />)
        expect(wrapper.find('Arrow').length).toBe(0);
    });

    it('should render 4 Arrow components if the metrics status is Rejected', () => {
        const item = {
            "metrics": {
                "status": "Rejected",
                "test": 89,
                "maintainability": 36,
                "security": 94,
                "workmanship": 69
            }
        }
        const wrapper = shallow(<MetricsFrame {...props} item={item} />)
        expect(wrapper.find('Arrow').length).toBe(4);
    });

})