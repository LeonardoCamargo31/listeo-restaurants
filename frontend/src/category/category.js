import React, { Component } from 'react'


import Form from './categoryForm'
import List from './categoryList'

export default class Category extends Component {
    render() {
        return (
            <div class="dashboard-content">
                <div id="titlebar">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>Add Listing</h2>
                            <nav id="breadcrumbs">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Dashboard</a></li>
                                    <li>Add Listing</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <Form />
                <List />
            </div>
        )
    }
}