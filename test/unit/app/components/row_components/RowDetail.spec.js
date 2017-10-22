import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'

import Row from '../../../../../app/components/row_components/Row'
import RowDetail from '../../../../../app/components/row_components/RowDetail'
import ResultFrame from '../../../../../app/components/detail_components/ResultFrame'
describe('<RowDetail />', () => {

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

    it('should render 1 ResultFrame component', () => {
        const wrapper = shallow(<RowDetail {...props} />)
        expect(wrapper.find(ResultFrame).length).toBe(1);
    });

})