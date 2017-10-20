// Component representing the frames for metrics, build, unit test, functional test in expanded row.

import React, { Component } from 'react'
import Arrow from 'react-arrow'
import PieChart from 'react-simple-pie-chart'
import PieChartFrame from './PieChartFrame'
import MetricsFrame from './MetricsFrame'
import buildIcon from '../../public/build-icon.png'
class ItemProcessFrame extends Component {

    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        console.log("Item Frame Click")
    }
    render() {
        const { style, name, itemFontColor, item } = this.props
        let fontColor, detailFrame
        if (name == "Metrics") {
            fontColor = itemFontColor.metric
            detailFrame = <MetricsFrame item={item}/>
        } else if (name == "Build") {
            fontColor = itemFontColor.build
            if(item.build.status == 'pending' || item.build.status == 'running') {
                detailFrame = null
            } else {
                detailFrame = <div className="float-frame"><img src={buildIcon} /></div>
            }           
        } else if (name == "Unit Test") {
            fontColor = itemFontColor.ut
            detailFrame = <PieChartFrame item={item} unit={true}/>
        } else if (name == "Functional Test") {
            fontColor = itemFontColor.ft
            detailFrame = <PieChartFrame item={item} unit={false}/>
        } 

        return (
            <div className={["status-frame", style].join(' ')} onClick={this.onClick}>
                <div><label className={fontColor}>{name}</label></div>
                {detailFrame}
            </div>
        )
    }
}

export default ItemProcessFrame