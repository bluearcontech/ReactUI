import React, { Component } from 'react'
import Arrow from 'react-arrow'
class MetricsFrame extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { item } = this.props
        let maintainabilityColor 
        if(item.metrics.status == "rejected") {
            maintainabilityColor = "red"
        } else {
            maintainabilityColor = "green"
        }
        return (
            <div className="float-frame">
                <div className="arrow-item">
                    <Arrow
                        direction="up"
                        shaftWidth={20}
                        shaftLength={20}
                        headWidth={40}
                        headLength={25}
                        fill="green"
                        strokeWidth={2}
                    />
                    <label className="metric-label-top">{item.metrics.test}</label>
                </div>
                <div className="arrow-item">                    
                    <Arrow
                        direction="down"
                        shaftWidth={20}
                        shaftLength={20}
                        headWidth={40}
                        headLength={25}
                        fill={maintainabilityColor}
                        strokeWidth={2}
                    />
                    <label className="metric-label-top">{item.metrics.maintainability}</label>
                </div>
                <div className="label-test">Test</div>
                <div className="label-test">Maintanability</div>
                <div className="arrow-item">
                    <Arrow
                        direction="right"
                        shaftWidth={20}
                        shaftLength={20}
                        headWidth={40}
                        headLength={25}
                        fill="yellow"
                        strokeWidth={2}
                    />
                    <label className="metric-label-bottom">{item.metrics.security}</label>
                </div>
                <div className="arrow-item">
                    <Arrow
                        direction="right"
                        shaftWidth={20}
                        shaftLength={20}
                        headWidth={40}
                        headLength={25}
                        fill="yellow"
                        strokeWidth={2}
                    />
                    <label className="metric-label-bottom">{item.metrics.workmanship}</label>
                </div>
                <div className="label-test">Security</div>
                <div className="label-test">Workmanship</div>
            </div>
        )
    }
}

export default MetricsFrame
