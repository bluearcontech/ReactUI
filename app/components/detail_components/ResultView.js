import React, { Component } from 'react'

class ResultView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let layout
        const { item } = this.props
        if (item.state == 'pending' || item.state == 'running') {
            layout = ''
        } else if (item.state == 'accepted') {
            layout = <div>
                <h4 className="label-align-center">Result</h4>
                <div className="result-label-accepted">Change Accepted</div>
                <h3 className="result-label-accepted">Auto-Merged</h3>
                <button className="button-result">Merged Build</button>
            </div>
        } else if (item.state == 'rejected') {
            layout = <div>
                <h4 className="label-align-center">Result</h4>
                <div className="result-label-rejected">Change Rejected</div>
                <h3 className="result-label-rejected">Metrics Reduction</h3>
                <button className="button-result">Find Issue</button>
            </div>
        } else if (item.state == 'completed') {
            layout = <div>
                <h4 className="label-align-center">Result</h4>
                <h3 className="result-label-complete">Complete</h3>
                <button className="button-result-complete">Deploy</button>
            </div>
        } 

        return (
            <div className="result-frame">{layout}</div>
        )
    }
}

export default ResultView