// Component representing expanded row
import React, { Component } from 'react'
import ItemProcessFrame from '../detail_components/ItemProcessFrame'
import buildImage from '../../public/build.png'
import firewallImage from '../../public/firewall.png'
import firewallAccepted from '../../public/firewall_accepted.png'
import firewallRejected from '../../public/firewall_rejected.png'
import firewallRunning from '../../public/firewall_running.png'
import ResultFrame from '../detail_components/ResultFrame'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import MetricsFrame from '../detail_components/MetricsFrame'
import UFTestFrame from '../detail_components/UFTestFrame'
import BuildFrame from '../detail_components/BuildFrame'

class RowDetail extends Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        console.log("button Clicked")
    }

    render() {
        const { itemFontColor, uniqueKey, item, itemStyle, itemBack, detail } = this.props
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
        if (detail == true) {
            detailView = ""
        }
        
        return (
            <ReactCSSTransitionGroup transitionName="example"
                transitionAppear={true} transitionAppearTimeout={500}
                transitionEnter={false} transitionLeave={false}>
                
                <div className={["row-collapse", item.state.toLowerCase()].join(' ')} data-id={uniqueKey} onClick={this.props.onClick}>
                    {
                        detail == true ?
                            <div className="row-overview">
                                <div className="cell-type"><img className="icon" src={item.type == 'fire' ? firewallImage : buildImage} /></div>
                                <label className={["cell-name", labelColor].join(' ')}>{item.id}</label>
                                <label className={["cell", labelColor].join(' ')}>{this.props.item.owner}</label>
                                <label className={["cell", labelColor].join(' ')}>{this.props.item.time}</label>
                                <label className={["cell", labelColor].join(' ')}>{this.props.item.state}</label>
                            </div> :
                            <div className="row-overview">
                                <div className="cell-type"><img className="icon" src={item.type == 'fire' ? firewallImage : buildImage} /></div>

                                <label className={["cell-name", labelColor].join(' ')} onClick={this.onClick}>{item.id}</label>
                                <label className={["cell", labelColor].join(' ')}>{this.props.item.owner}</label>
                                <label className={["cell", labelColor].join(' ')}>{this.props.item.time}</label>
                                <label className={["cell", labelColor].join(' ')}>{this.props.item.state}</label>

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

                </div >

            </ReactCSSTransitionGroup>
        )
    }
}

export default RowDetail