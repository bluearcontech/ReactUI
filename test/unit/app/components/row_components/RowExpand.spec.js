import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'

import RowItem from '../../../../../app/components/row_components/RowItem'
import RowCollapse from '../../../../../app/components/row_components/RowCollapse'
import RowExpand from '../../../../../app/components/row_components/RowExpand'
import ItemProcessFrame from '../../../../../app/components/detail_components/ItemProcessFrame'
import ResultView from '../../../../../app/components/detail_components/ResultView'
describe('<RowItem />', () => {

    let props
    beforeEach(() => {
        props = {
            item: {
                "type": "build",
                "id": "Terrow-R1-1235",
                "owner": "",
                "time": "",
                "state": "pending",
                "metrics": {
                    "status": "pending"
                },
                "build": {
                    "status": "pending"
                },
                "unittest": {
                    "status": "pending"
                },
                "functionaltest": {
                    "status": "pending"
                }
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

    it('should render 4  ItemProcessFrame component', () => {
        const wrapper = shallow(<RowExpand {...props}  />)
        expect(wrapper.find(ItemProcessFrame).length).toBe(4);
    });

    it('should render 1 ItemProcessFrame component', () => {
        const wrapper = shallow(<RowExpand {...props}  />)
        expect(wrapper.find(ResultView).length).toBe(1);
    });

})