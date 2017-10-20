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
                "owner": "Thomas Mon",
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
            itemBack: {
                "metricBack": "red",
                "buildBack": "blue",
                "utBack": "white",
                "ftBack": "pink"
            }
        }
    })

    it('should render 8 labels', () => {
        const wrapper = shallow(<RowCollapse {...props} />)
        expect(wrapper.find('label').length).toBe(8);
    });

    it('should render 2 divs', () => {
        const wrapper = shallow(<RowCollapse {...props} />)
        expect(wrapper.find('div').length).toBe(2);
    });

    it('should render img tag ', () => {
        const wrapper = shallow(<RowCollapse {...props} />)
        expect(wrapper.find('img').length).toBe(1);
    });

    it('should render one div with class named row-collapse', () => {
        const wrapper = shallow(<RowCollapse {...props} />)
        expect(wrapper.find('.row-collapse').length).toBe(1);
    });
})