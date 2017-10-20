import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'

import Row from '../../../../../app/components/row_components/Row'
import RowDetail from '../../../../../app/components/row_components/RowDetail'
import ItemProcessFrame from '../../../../../app/components/detail_components/ItemProcessFrame'
import ResultView from '../../../../../app/components/detail_components/ResultView'
describe('<RowDetail />', () => {

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

    it('should render 4  ItemProcessFrame component', () => {
        const wrapper = shallow(<RowDetail {...props} />)
        expect(wrapper.find(ItemProcessFrame).length).toBe(4);
    });

    it('should render 1 ResultView component', () => {
        const wrapper = shallow(<RowDetail {...props} />)
        expect(wrapper.find(ResultView).length).toBe(1);
    });

})