import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'

// import RowtItem from 'App/components/row_components/RowItem' 
// import RowCollapse from 'App/components/row_components/RowCollapse' 
// import RowExpand from 'App/components/row_components/RowExpand' 

import RowItem from '../../../../../app/components/row_components/RowItem'
import RowCollapse from '../../../../../app/components/row_components/RowCollapse'
import RowExpand from '../../../../../app/components/row_components/RowExpand'
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
            uniqueKey: '1233455'
        }
    })

    it('should render RowCollapse component', () => {
        const wrapper = shallow(<RowItem {...props} selected={false} />)
        expect(wrapper.find(RowCollapse).length).toBe(1);
    });

    it('should render RowExpand component', () => {
        const wrapper = shallow(<RowItem {...props} selected={true} />)
        expect(wrapper.find(RowExpand).length).toBe(1);
    });

    it('should render empty div', () => {
        const wrapper = shallow(<RowItem {...props} selected={"invalid"} />)
        expect(wrapper.find('div').length).toBe(1);
    });
})