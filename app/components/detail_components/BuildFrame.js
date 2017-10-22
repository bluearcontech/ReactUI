import React, { Component } from 'react'
import buildIcon from '../../public/build-icon.png'
class BuildFrame extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { item } = this.props
        let buildPending = false
        let buildLabel = "Build is not running yet"
        if (item.state == "pending" || item.build.status == "pending" || item.build.status == "running") {
            buildPending = true
            if(item.build.status == "running") {
                buildLabel = "Build is running now"
            }
        }
        return (
            <div>
                <div className="float-frame">
                    <img src={buildIcon} />
                    {
                        buildPending == true ?
                            <label className="label-date">{buildLabel}</label>
                            :
                            <label className="label-date">{item.build.date}</label>
                    }
                </div>
            </div>
        )
    }
}

export default BuildFrame