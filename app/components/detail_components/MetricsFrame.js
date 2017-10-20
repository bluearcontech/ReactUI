import React, { Component } from 'react'
import Arrow from 'react-arrow'
class MetricsFrame extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { item } = this.props
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
                </div>
                <div className="arrow-item">
                    <Arrow
                        direction="down"
                        shaftWidth={20}
                        shaftLength={20}
                        headWidth={40}
                        headLength={25}
                        fill="red"
                        strokeWidth={2}
                    />
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
                </div>
                <div className="label-test">Security</div>
                <div className="label-test">Workmanship</div>
            </div>
        )
    }
}

export default MetricsFrame
