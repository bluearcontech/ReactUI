import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'

import Row from '../../../../../app/components/row_component/Row'
import BuildFrame from '../../../../../app/components/detail_components/BuildFrame'
import MetricsFrame from '../../../../../app/components/detail_components/MetricsFrame'
import UFTestFrame from '../../../../../app/components/detail_components/UFTestFrame'
describe('<Row />', () => {

    let props
    beforeEach(() => {
        props = {
            item: {
                "type": "build",
                "id": "Terrow-R1-1235",
                "owner": "",
                "time": "",
                "state": "Pending",
                "metrics": {
                    "status": "Pending"
                },
                "build": {
                    "status": "Pending"
                },
                "unittest": {
                    "status": "Pending"
                },
                "functionaltest": {
                    "status": "Pending"
                }
            },
            itemBack: {
                "metricBack": "color-red",
                "buildBack": "color-green",
                "utBack": 'color-red',
                "ftBack": "color-grey"
            },
            uniqueKey: '1233455',
            itemStyle: {
                "metricStyle": 'border-pending',
                "buildStyle": 'border-rejected',
                "utStyle": 'border-completed',
                "ftStyle": 'border-running'
            }
        }
    })

    it('should render 1 MetricsFrame component', () => {
        const wrapper = shallow(<Row {...props} />)
        expect(wrapper.find(MetricsFrame).length).toBe(1)
    })

    it('should render 2 UFTestFrame components', () => {
        const wrapper = shallow(<Row {...props} />)
        expect(wrapper.find(UFTestFrame).length).toBe(2)
    })

    it('should render 1 BuildFrame component', () => {
        const wrapper = shallow(<Row {...props} />)
        expect(wrapper.find(BuildFrame).length).toBe(1)
    })
})