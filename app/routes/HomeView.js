import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import data from 'App/data.json'
import 'App/scss/style.scss'
import Row from 'App/components/row_component/Row'
import buildImage from 'App/public/build.png'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [],       // Fire and Build list
            selectedId: ''  // selected Row
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        var list = []
        for (var i = 0; i < data.length; i++) {
            list.push(data[i])
        }
        this.setState({
            list: list
        })
        // get json data using ajax call
        $.ajax({
            url: './data.json',
            type: "GET",
            dataType: "json",
            success: function (data) {
                this.setState({ data: data })
                console.log(data)
            },
            error: function (error) {
                
            }
        })
    }

    handleClick(event) {
        event.preventDefault()
        //if the button click, don't trigger row div click method
        if(event.target.className.includes("cell-state")) {
            console.log("button clicked")
            return
        }

        // Get selected row when click row
        var id = event.currentTarget.attributes['data-id'].value
        if (this.state.selectedId != id) {
            this.setState({
                selectedId: id
            })
        }
    }

    render() {
        return (
            <div className="container">
                    <div className="header-label">
                        <label className="header-type">ChangeList/Build</label>
                        <label className="header-owner">Owner</label>
                        <label className="header-time">Time Started</label>
                        <label className="header">State</label>
                        <label className="header">Metric</label>
                        <label className="header">Build</label>
                        <label className="header">Unit Test</label>
                        <label className="header">Functional Test</label>
                    </div>
                    {
                        this.state.list.map((item, index) => {
                            let uniqueKey = item.id + index
                            return (<Row item={item} key={index} onClick={this.handleClick} uniqueKey={uniqueKey} selected={this.state.selectedId == uniqueKey ? true : false} />)
                        })
                    }
            </div>
        )
    }
}
export default Home