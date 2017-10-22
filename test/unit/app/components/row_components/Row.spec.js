import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'

// import RowtItem from 'App/components/row_components/RowItem' 
// import RowExpand from 'App/components/row_components/RowExpand' 

import Row from '../../../../../app/components/row_components/Row'
import RowDetail from '../../../../../app/components/row_components/RowDetail'
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
            uniqueKey: '1233455'
        }
    })

    it('should render RowDetail component', () => {
        const wrapper = shallow(<Row {...props} selected={true} />)
        expect(wrapper.find(RowDetail).length).toBe(1);
    });

})