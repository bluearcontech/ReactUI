// Component representing expanded row
import React, { Component } from 'react'
import ItemProcessFrame from '../detail_components/ItemProcessFrame'
import buildImage from '../../public/build.png'
import firewallImage from '../../public/firewall.png'
import firewallAccepted from '../../public/firewall_accepted.png'
import firewallRejected from '../../public/firewall_rejected.png'
import firewallRunning from '../../public/firewall_running.png'
import ResultView from '../detail_components/ResultView'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AnimateHeight from 'react-animate-height';
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
        if (item.state == 'accepted' || item.state == 'completed') {
            labelColor = 'label-color-green'
        } else if (item.state == 'rejected') {
            labelColor = 'label-color-red'
        } else if (item.state == 'pending') {
            labelColor = 'label-color-grey'
        } else if (item.state == 'running') {
            labelColor = 'label-color-blue'
        }
        var detailView = "detail-hidden"
        if (detail == true) {
            detailView = ""
        }
        let fireallImage = '../../public/firewall.png'
        return (
            <ReactCSSTransitionGroup transitionName="example"
                transitionAppear={true} transitionAppearTimeout={500}
                transitionEnter={false} transitionLeave={false}>
                
                <div className={["row-collapse", item.state].join(' ')} data-id={uniqueKey} onClick={this.props.onClick}>
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
                        <ItemProcessFrame itemFontColor={itemFontColor} item={item} style={itemStyle.metricStyle} name="Metrics" />
                        <ItemProcessFrame itemFontColor={itemFontColor} item={item} style={itemStyle.buildStyle} name="Build" />
                        <ItemProcessFrame itemFontColor={itemFontColor} item={item} style={itemStyle.utStyle} name="Unit Test" />
                        <ItemProcessFrame itemFontColor={itemFontColor} item={item} style={itemStyle.ftStyle} name="Functional Test" />
                        <ResultView item={item} />
                    </div>


                </div >

            </ReactCSSTransitionGroup>
        )
    }
}

export default RowDetail