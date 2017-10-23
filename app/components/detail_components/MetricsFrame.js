import React, { Component } from 'react'
import Arrow from 'react-arrow'
class MetricsFrame extends Component {
    constructor(props) {
        super(props)
    }

    onClick() {
        console.log("Item Frame Click")
    }

    render() {
        const { style, itemFontColor, item } = this.props

        let maintainabilityColor
        if (item.metrics.status == "Rejected") {
            maintainabilityColor = "red"
        } else {
            maintainabilityColor = "green"
        }
        let showArrow = true
        let metricsStatusLabel = "Metrics is not running yet."
        let metricsLabelColor = "label-pending"
        if (item.metrics.status == "Running" || item.metrics.status == "Pending") {
            showArrow = false
            if(item.metrics.status == "Running") {
                metricsStatusLabel = "Metrics is running now."
                metricsLabelColor = "label-running"
            }
        }
        return (
            <div className={["status-frame", style].join(' ')} onClick={this.onClick}>
                <div><label className={[itemFontColor.metrics, "step-label"].join(' ')}>Metrics</label></div>
                {
                    showArrow == true ?
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
                                <label className="metrics-label-top">{item.metrics.test}</label>
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
                                <label className="metrics-label-top">{item.metrics.maintainability}</label>
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
                                <label className="metrics-label-bottom">{item.metrics.security}</label>
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
                                <label className="metrics-label-bottom">{item.metrics.workmanship}</label>
                            </div>
                            <div className="label-test">Security</div>
                            <div className="label-test">Workmanship</div>
                        </div>
                        :
                        <div className="float-frame">
                            <label className={["frame-label-status", metricsLabelColor].join(' ')}>{metricsStatusLabel}</label>
                        </div>
                }
            </div>
        )
    }
}

export default MetricsFrame
