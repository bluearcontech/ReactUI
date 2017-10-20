// Component representing collapsed row
import React, { Component } from 'react'
import buildImage from '../../public/build.png'
import firewallImage from '../../public/firewall.png'
class ItemCollapse extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { uniqueKey, item, itemBack } = this.props
        let labelColor 
        if(item.state == 'accepted' || item.state == 'completed') {
            labelColor = 'label-color-green'
        } else if(item.state == 'rejected') {
            labelColor = 'label-color-red'
        } else if(item.state == 'pending') {
            labelColor ='label-color-grey'
        } else if(item.state == 'running') {
            labelColor = 'label-color-blue'
        }
        return (
            <div className={["row-collapse", item.state].join(' ')} onClick={this.props.onClick} data-id={uniqueKey}>
                <div className="cell-type"><img className="icon" src={item.type == 'fire' ? firewallImage : buildImage} /> </div>
                <label className={["cell-name", labelColor].join(' ')}>{item.id}</label>
                <label className={["cell", labelColor].join(' ')}>{this.props.item.owner}</label>
                <label className={["cell", labelColor].join(' ')}>{this.props.item.time}</label>
                <label className={["cell", labelColor].join(' ')}>{this.props.item.state}</label>
                <label className={["cell-state", itemBack.metricBack].join(' ')}></label>
                <label className={["cell-state", itemBack.buildBack].join(' ')}></label>
                <label className={["cell-state", itemBack.utBack].join(' ')}></label>
                <label className={["cell-state", itemBack.ftBack].join(' ')}></label>
            </div >
        )
    }
}

export default ItemCollapse