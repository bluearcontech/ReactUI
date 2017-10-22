import React, { Component } from 'react'
import buildIcon from '../../public/build-icon.png'
class BuildFrame extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { style, itemFontColor, item } = this.props
        let buildPending = false
        let buildStatusLabel = "Build is not running yet"
        let buildLabelColor = "label-pending"
        if (item.build.status == "Pending" || item.build.status == "Running") {
            buildPending = true
            if (item.build.status == "Running") {
                buildStatusLabel = "Build is running now"
                buildLabelColor = "label-running"
            }
        }
        return (
            <div className={["status-frame", style].join(' ')} onClick={this.onClick}>
                <div><label className={itemFontColor.fontColor}>{name}</label></div>
                <div className="float-frame">
                    <img src={buildIcon} />
                    {
                        buildPending == true ?
                            <label className={["label-date", buildLabelColor].join(' ')}>{buildStatusLabel}</label>
                            :
                            <label className="label-date">{item.build.date}</label>
                    }
                </div>
            </div>
        )
    }
}

export default BuildFrame