// Component representing each row 
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RowDetail from './RowDetail'
import '../../scss/style.scss'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
class Row extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { selected, uniqueKey } = this.props

        let layout = null
        let metricsFrameStyle, buildFrameStyle, utFrameStyle, ftFrameStyle
        let metricBack, buildBack, utBack, ftBack
        let metricLabelCol, buildLabelCol, utlabelCol, ftLabelCol
        if (this.props.item.metrics.status == 'Pending') {
            metricsFrameStyle = "border-pending"
            metricBack = 'color-grey'
            metricLabelCol = 'label-color-pending'
        } else if (this.props.item.metrics.status == 'Running') {
            metricsFrameStyle = "border-running"
            metricBack = 'color-green'
            metricLabelCol = 'label-color-running'
        } else if (this.props.item.metrics.status == 'Rejected' || this.props.item.metrics.status == 'Fail') {
            metricsFrameStyle = "border-rejected"
            metricBack = 'color-red'
            metricLabelCol = 'label-color-rejected'
        } else if (this.props.item.metrics.status == 'Accepted' || this.props.item.metrics.status == 'Success') {
            metricsFrameStyle = "border-completed"
            metricBack = 'color-blue'
            metricLabelCol = 'label-color-complete'
        }

        if (this.props.item.build.status == 'Pending') {
            buildFrameStyle = 'border-pending'
            buildBack = 'color-grey'
            buildLabelCol = 'label-color-pending'
        } else if (this.props.item.build.status == 'Running') {
            buildFrameStyle = "border-running"
            buildBack = 'color-green'
            buildLabelCol = 'label-color-running'
        } else if (this.props.item.build.status == 'Rejected' || this.props.item.build.status == 'Fail') {
            buildFrameStyle = "border-rejected"
            buildBack = 'color-red'
            buildLabelCol = 'label-color-rejected'
        } else if (this.props.item.build.status == 'Success' || this.props.item.build.status == 'Accepted') {
            buildFrameStyle = "border-completed"
            buildBack = 'color-blue'
            buildLabelCol = 'label-color-complete'
        }

        if (this.props.item.unittest.status == 'Pending') {
            utFrameStyle = "border-pending"
            utBack = 'color-grey'
            utlabelCol = 'label-color-pending'
        } else if (this.props.item.unittest.status == 'Running') {
            utFrameStyle = 'border-running'
            utBack = 'color-green'
            utlabelCol = 'label-color-running'
        } else if (this.props.item.unittest.status == 'Rejected' || this.props.item.unittest.status == 'Fail') {
            utFrameStyle = "border-rejected"
            utBack = 'color-red'
            utlabelCol = 'label-color-rejected'
        } else if (this.props.item.unittest.status == 'Success' || this.props.item.unittest.status == 'Accepted') {
            utFrameStyle = "border-completed"
            utBack = 'color-blue'
            utlabelCol = 'label-color-complete'
        }

        if (this.props.item.functionaltest.status == 'Pending') {
            ftFrameStyle = "border-pending"
            ftBack = 'color-grey'
            ftLabelCol = 'label-color-pending'
        } else if (this.props.item.functionaltest.status == 'Running') {
            ftFrameStyle = 'border-running'
            ftBack = 'color-green'
            ftLabelCol = 'label-color-running'
        } else if (this.props.item.functionaltest.status == 'Rejected' || this.props.item.functionaltest.status == 'Fail') {
            ftFrameStyle = "border-rejected"
            ftBack = 'color-red'
            ftLabelCol = 'label-color-rejected'
        } else if (this.props.item.functionaltest.status == 'Success' || this.props.item.functionaltest.status == 'Accepted') {
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

        return (
            <RowDetail itemFontColor={itemFontColor} itemBack={itemBack} itemStyle={itemStyle} item={this.props.item} onClick={this.props.onClick} uniqueKey={uniqueKey} detail={selected} />
        )
    }
}

export default Row