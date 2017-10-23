// Component representing expanded row
import React, { Component } from 'react'
import buildImage from '../../public/build.png'
import firewallImage from '../../public/firewall.png'
import ResultFrame from '../detail_components/ResultFrame'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import MetricsFrame from '../detail_components/MetricsFrame'
import UFTestFrame from '../detail_components/UFTestFrame'
import BuildFrame from '../detail_components/BuildFrame'

class Row extends Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        console.log("button Clicked")
    }

    render() {
        const { selected, uniqueKey, item } = this.props
        let layout = null
        let metricsFrameStyle, buildFrameStyle, utFrameStyle, ftFrameStyle
        let metricBack, buildBack, utBack, ftBack
        let metricLabelCol, buildLabelCol, utlabelCol, ftLabelCol
        if (item.metrics.status == 'Pending') {
            metricsFrameStyle = "border-pending"
            metricBack = 'color-grey'
            metricLabelCol = 'label-color-pending'
        } else if (item.metrics.status == 'Running') {
            metricsFrameStyle = "border-running"
            metricBack = 'color-green'
            metricLabelCol = 'label-color-running'
        } else if (item.metrics.status == 'Rejected' || item.metrics.status == 'Fail') {
            metricsFrameStyle = "border-rejected"
            metricBack = 'color-red'
            metricLabelCol = 'label-color-rejected'
        } else if (item.metrics.status == 'Accepted' || item.metrics.status == 'Success') {
            metricsFrameStyle = "border-completed"
            metricBack = 'color-blue'
            metricLabelCol = 'label-color-complete'
        }

        if (item.build.status == 'Pending') {
            buildFrameStyle = 'border-pending'
            buildBack = 'color-grey'
            buildLabelCol = 'label-color-pending'
        } else if (item.build.status == 'Running') {
            buildFrameStyle = "border-running"
            buildBack = 'color-green'
            buildLabelCol = 'label-color-running'
        } else if (item.build.status == 'Rejected' || item.build.status == 'Fail') {
            buildFrameStyle = "border-rejected"
            buildBack = 'color-red'
            buildLabelCol = 'label-color-rejected'
        } else if (item.build.status == 'Success' || item.build.status == 'Accepted') {
            buildFrameStyle = "border-completed"
            buildBack = 'color-blue'
            buildLabelCol = 'label-color-complete'
        }

        if (item.unittest.status == 'Pending') {
            utFrameStyle = "border-pending"
            utBack = 'color-grey'
            utlabelCol = 'label-color-pending'
        } else if (item.unittest.status == 'Running') {
            utFrameStyle = 'border-running'
            utBack = 'color-green'
            utlabelCol = 'label-color-running'
        } else if (item.unittest.status == 'Rejected' || item.unittest.status == 'Fail') {
            utFrameStyle = "border-rejected"
            utBack = 'color-red'
            utlabelCol = 'label-color-rejected'
        } else if (item.unittest.status == 'Success' || item.unittest.status == 'Accepted') {
            utFrameStyle = "border-completed"
            utBack = 'color-blue'
            utlabelCol = 'label-color-complete'
        }

        if (item.functionaltest.status == 'Pending') {
            ftFrameStyle = "border-pending"
            ftBack = 'color-grey'
            ftLabelCol = 'label-color-pending'
        } else if (item.functionaltest.status == 'Running') {
            ftFrameStyle = 'border-running'
            ftBack = 'color-green'
            ftLabelCol = 'label-color-running'
        } else if (item.functionaltest.status == 'Rejected' || item.functionaltest.status == 'Fail') {
            ftFrameStyle = "border-rejected"
            ftBack = 'color-red'
            ftLabelCol = 'label-color-rejected'
        } else if (item.functionaltest.status == 'Success' || item.functionaltest.status == 'Accepted') {
            ftFrameStyle = "border-completed"
            ftBack = 'color-blue'
            ftLabelCol = 'label-color-complete'
        }

        const itemStyle = {
            "metricStyle": metricsFrameStyle,
            "buildStyle": buildFrameStyle,
            "utStyle": utFrameStyle,
            "ftStyle": ftFrameStyle
        }

        const itemBack = {
            "metricBack": metricBack,
            "buildBack": buildBack,
            "utBack": utBack,
            "ftBack": ftBack
        }

        const itemFontColor = {
            'metrics': metricLabelCol,
            "build": buildLabelCol,
            "ut": utlabelCol,
            'ft': ftLabelCol
        }
        
        let labelColor
        if (item.state == 'Accepted' || item.state == 'Completed') {
            labelColor = 'label-color-complete'
        } else if (item.state == 'Rejected') {
            labelColor = 'label-color-rejected'
        } else if (item.state == 'Pending') {
            labelColor = 'label-color-pending'
        } else if (item.state == 'Running') {
            labelColor = 'label-color-running'
        }
        var detailView = "detail-hidden"
        if (selected == true) {
            detailView = ""
        }
        
        return (
            <ReactCSSTransitionGroup transitionName="example"
                transitionAppear={true} transitionAppearTimeout={500}
                transitionEnter={false} transitionLeave={false}>
                
                <div className={["row-collapse", item.state.toLowerCase()].join(' ')} data-id={uniqueKey} onClick={this.props.onClick}>
                    {
                        selected == true ?
                            <div className="row-overview">
                                <div className="cell-type"><img className="icon" src={item.type == 'fire' ? firewallImage : buildImage} /></div>
                                <label className={["cell-name", labelColor].join(' ')}>{item.id}</label>
                                <label className={["cell", labelColor].join(' ')}>{item.owner}</label>
                                <label className={["cell", labelColor].join(' ')}>{item.time}</label>
                                <label className={["cell", labelColor].join(' ')}>{item.state}</label>
                            </div> :
                            <div className="row-overview">
                                <div className="cell-type"><img className="icon" src={item.type == 'fire' ? firewallImage : buildImage} /></div>

                                <label className={["cell-name", labelColor].join(' ')} onClick={this.onClick}>{item.id}</label>
                                <label className={["cell", labelColor].join(' ')}>{item.owner}</label>
                                <label className={["cell", labelColor].join(' ')}>{item.time}</label>
                                <label className={["cell", labelColor].join(' ')}>{item.state}</label>

                                <label className={["cell-state", itemBack.metricBack].join(' ')}></label>
                                <label className={["cell-state", itemBack.buildBack].join(' ')}></label>
                                <label className={["cell-state", itemBack.utBack].join(' ')}></label>
                                <label className={["cell-state", itemBack.ftBack].join(' ')}></label>
                            </div>
                    }
                    <div className={detailView}>
                        <MetricsFrame itemFontColor={itemFontColor} item={item} style={itemStyle.metricStyle} />
                        <BuildFrame itemFontColor={itemFontColor} item={item} style={itemStyle.buildStyle} />
                        <UFTestFrame itemFontColor={itemFontColor} item={item} style={itemStyle.utStyle} unit={true} />
                        <UFTestFrame itemFontColor={itemFontColor} item={item} style={itemStyle.ftStyle} unit={false} />
                        <ResultFrame item={item} />
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

export default Row