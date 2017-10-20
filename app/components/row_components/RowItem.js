// Component representing each row 
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RowCollapse from './RowCollapse'
import RowExpand from './RowExpand'
import '../../scss/style.scss'
import buildImage from '../../public/build.png'
import firewallImage from '../../public/firewall.png'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AnimateHeight from 'react-animate-height';
class RowItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { selected, uniqueKey } = this.props
        
        let layout = null
        let metricsImagePath, buildImagePath, utImagePath, ftImagePath
        let metricsFrameStyle, buildFrameStyle, utFrameStyle, ftFrameStyle
        let metricBack, buildBack, utBack, ftBack
        let metricLabelCol, buildLabelCol, utlabelCol, ftLabelCol
        if (this.props.item.metrics.status == 'pending') {
            metricsFrameStyle = "border-pending"
            metricBack = 'color-grey'
            metricLabelCol = 'label-color-grey'
        } else if (this.props.item.metrics.status == 'running') {
            metricsFrameStyle = "border-running"
            metricBack = 'color-green'
            metricLabelCol = 'label-color-green'
        } else if (this.props.item.metrics.status == 'rejected' || this.props.item.metrics.status == 'fail') {
            metricsFrameStyle = "border-rejected"
            metricBack = 'color-red'
            metricLabelCol = 'label-color-red'
        } else if (this.props.item.metrics.status == 'accepted' || this.props.item.metrics.status == 'success') {
            metricsFrameStyle = "border-completed"
            metricBack = 'color-blue'
            metricLabelCol = 'label-color-blue'
        }

        if (this.props.item.build.status == 'pending') {
            buildFrameStyle = 'border-pending'
            buildBack = 'color-grey'
            buildLabelCol = 'label-color-grey'
        } else if (this.props.item.build.status == 'running') {
            buildFrameStyle = "border-running"
            buildBack = 'color-green'
            buildLabelCol = 'label-color-green'
        } else if (this.props.item.build.status == 'rejected' || this.props.item.build.status == 'fail') {
            buildFrameStyle = "border-rejected"
            buildBack = 'color-red'
            buildLabelCol = 'label-color-red'
        } else if (this.props.item.build.status == 'success' || this.props.item.build.status == 'accepted') {
            buildFrameStyle = "border-completed"
            buildBack = 'color-blue'
            buildLabelCol = 'label-color-blue'
        }

        if (this.props.item.unittest.status == 'pending') {
            utFrameStyle = "border-pending"
            utBack = 'color-grey'
            utlabelCol = 'label-color-grey'
        } else if (this.props.item.unittest.status == 'running') {
            utFrameStyle = 'border-running'
            utBack = 'color-green'
            utlabelCol = 'label-color-green'
        } else if (this.props.item.unittest.status == 'rejected' || this.props.item.unittest.status == 'fail') {
            utFrameStyle = "border-rejected"
            utBack = 'color-red'
            utlabelCol = 'label-color-red'
        } else if (this.props.item.unittest.status == 'success' || this.props.item.unittest.status == 'accepted') {
            utFrameStyle = "border-completed"
            utBack = 'color-blue'
            utlabelCol = 'label-color-blue'
        }

        if (this.props.item.functionaltest.status == 'pending') {
            ftFrameStyle = "border-pending"
            ftBack = 'color-grey'
            ftLabelCol = 'label-color-grey'
        } else if (this.props.item.functionaltest.status == 'running') {
            ftFrameStyle = 'border-running'
            ftBack = 'color-green'
            ftLabelCol = 'label-color-green'
        } else if (this.props.item.functionaltest.status == 'rejected' || this.props.item.functionaltest.status == 'fail') {
            ftFrameStyle = "border-rejected"
            ftBack = 'color-red'
            ftLabelCol = 'label-color-red'
        } else if (this.props.item.functionaltest.status == 'success' || this.props.item.functionaltest.status == 'accepted') {
            ftFrameStyle = "border-completed"
            ftBack = 'color-blue'
            ftLabelCol = 'label-color-blue'
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
            'metric': metricLabelCol,
            "build": buildLabelCol,
            "ut": utlabelCol,
            'ft': ftLabelCol
        }
        
        if (selected == true) {
            layout = <RowExpand itemFontColor={itemFontColor} itemStyle={itemStyle} item={this.props.item} onClick={this.props.onClick} uniqueKey={uniqueKey} detail={true} />
        } else if (selected == false) {
            layout = <RowCollapse itemBack={itemBack} itemStyle={itemStyle} item={this.props.item} onClick={this.props.onClick} uniqueKey={uniqueKey} detail={false} />
        } else {
            layout = ""
        }
        return (
            <div>
                {layout}
            </div>
        )
    }
}

export default RowItem