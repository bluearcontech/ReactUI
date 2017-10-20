import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import data from 'App/data.json'
import 'App/scss/style.scss'
import RowItem from 'App/components/row_components/RowItem'
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
        console.log("ajax Call request")
        $.ajax({
            url: './data.json',
            type: "GET",
            dataType: "json",
            success: function (data) {
                this.setState({ data: data })
                console.log(data)
            },
            error: function (error) {
                console.log("error: " + error.status)
            }
        })
    }

    handleClick(event) {
        event.preventDefault()
        // Get selected row when click row
        console.log("click method")
        var id = event.currentTarget.attributes['data-id'].value
        if (this.state.selectedId == id) {
            this.setState({
                selectedId: ''
            })
        } else {
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
                            return (<RowItem item={item} key={index} onClick={this.handleClick} uniqueKey={uniqueKey} selected={this.state.selectedId == uniqueKey ? true : false} />)
                        })
                    }
            </div>
        )
    }
}
export default Home