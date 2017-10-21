import React, { Component } from 'react'
import Pie from '../PieChart/Pie'
import { Line } from 'rc-progress';
class PieChartFrame extends Component {

    constructor(props) {
        super(props)
        
    }

    componentDidMount() {
        this.setState({
            data: [30, 50]
        })
    }

    render() {
        const { item, unit } = this.props
        let tpValue, ccValue, ccbackValue
        let renderLayout = false
        if (unit == true && item.unittest.status != "pending") {
            renderLayout = true
            tpValue = item.unittest.testpass
            ccValue = item.unittest.codecover
        } else if (unit == false && item.functionaltest.status != "pending") {
            renderLayout = true
            tpValue = item.functionaltest.testpass
            ccValue = item.functionaltest.codecover
        }
        tpValue = tpValue + '%'
        ccbackValue = ccValue * 0.88 + '%'
        ccValue = ccValue + '%'

        let layout
        var colors = ['#F67439', '#6BA644'];
        if (renderLayout) {
            layout =
                <div className="chart-frame">
                    <div className="pie-chart">
                        <Pie
                            data={[30, 50]}
                            radius={45}
                            hole={0}
                            colors={colors}
                            labels={true}
                            percent={true}
                            strokeWidth={3}
                            stroke={'#fff'}
                        />
                    </div>
                    <div className="test-percent">                        
                        <label className="tp-label">{tpValue}</label>
                        <font size="1">test passed</font>                        
                    </div>
                    <div className="line-bar-frame">
                        <div className="line-bar-back">
                        </div>
                        <div className="line-bar-per" style={{ width: ccbackValue }}>
                        </div>
                        
                        <div className="line-bar-label-frame">
                            <div className="percent"><strong>{ccValue}</strong></div>
                            <font>Code Completed</font>
                        </div>
                    </div>
                </div>
        } else {
            <div></div>
        }
        return (
            <div>{layout}</div>
        )
    }
}

export default PieChartFrame
