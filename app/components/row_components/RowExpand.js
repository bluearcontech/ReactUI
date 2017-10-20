// Component representing expanded row
import React, { Component } from 'react'
import ItemProcessFrame from '../detail_components/ItemProcessFrame'
import buildImage from '../../public/build.png'
import firewallImage from '../../public/firewall.png'
import ResultView from '../detail_components/ResultView'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AnimateHeight from 'react-animate-height';
class RowExpand extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { itemFontColor, uniqueKey, item, itemStyle, detail } = this.props
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
        return (
            <ReactCSSTransitionGroup transitionName="example"
                transitionAppear={true} transitionAppearTimeout={500}
                transitionEnter={false} transitionLeave={false}>

                <div className={["row-expand", item.state].join(' ')} data-id={uniqueKey}>
                    <div className="cell-type"><img className="icon" src={item.type == 'fire' ? firewallImage : buildImage} /></div>
                    <label className={["cell-name", labelColor].join(' ')}>{item.id}</label>
                    <label className={["cell", labelColor].join(' ')}>{this.props.item.owner}</label>
                    <label className={["cell", labelColor].join(' ')}>{this.props.item.time}</label>
                    <label className={["cell", labelColor].join(' ')}>{this.props.item.state}</label>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>

                    <div>
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

export default RowExpand