import React, { Component } from 'react';

import NavBar from '../common/navBar'
import Header from '../common/header'

export default class App extends Component {
    render() {
        return (
            <div id="wrapper">
                <Header />
                <div id="dashboard">
                    <NavBar />
                    {this.props.children}
                </div>
            </div>
        )
    }
}