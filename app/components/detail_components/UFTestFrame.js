import React, { Component } from 'react'
import Pie from '../PieChart/Pie'
class UFTestFrame extends Component {

    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.setState({
            data: [30, 50]
        })
    }

    render() {
        const { style, itemFontColor, item, unit } = this.props
        let tpValue, ccValue, ccbackValue
        let renderLayout = false
        let fontColor, frameName, testLabel
        if (unit == true) {
            fontColor = itemFontColor.ut
            frameName = "Unit Test"
            if (item.unittest.status != "Pending") {
                renderLayout = true
                tpValue = item.unittest.testpass
                ccValue = item.unittest.codecover
            } else {
                testLabel = "Unit Test is not running yet."
            }
        } else if (unit == false) {
            fontColor = itemFontColor.ft
            frameName = "Functional Test"
            if (item.functionaltest.status != "Pending") {
                renderLayout = true
                tpValue = item.functionaltest.testpass
                ccValue = item.functionaltest.codecover
            } else {
                testLabel = "Functional Test is not running yet."
            }
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
            layout =
                <div className="chart-frame">
                    <label className={["frame-label-status", "label-pending"].join(' ')}>{testLabel}</label>
                </div>
        }
        return (
            <div className={["status-frame", style].join(' ')} onClick={this.onClick}>
                <div><label className={fontColor}>{frameName}</label></div>
                {layout}
            </div>
        )
    }
}

export default UFTestFrame
