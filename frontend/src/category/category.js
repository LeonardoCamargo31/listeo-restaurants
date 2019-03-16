import React, { Component } from 'react'

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

                <div class="row">
                    <div class="col-lg-12">

                        <div id="add-listing">

                            <div class="add-listing-section">

                                <div class="add-listing-headline">
                                    <h3><i class="sl sl-icon-doc"></i> Basic Informations</h3>
                                </div>

                                <div class="row with-forms">
                                    <div class="col-md-12">
                                        <h5>Listing Title <i class="tip" data-tip-content="Name of your business"></i></h5>
                                        <input class="search-field" type="text" value="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="dashboard-list-box margin-top-0">
                            <h4>Listagem de restaurantes</h4>
                            <table class="basic-table">

                                <tbody>
                                    <tr>
                                        <th>Column 1</th>
                                        <th>Column 2</th>
                                    </tr>

                                    <tr>
                                        <td data-label="Column 1">Item</td>
                                        <td data-label="Column 2">Description</td>
                                    </tr>

                                    <tr>
                                        <td data-label="Column 1">Item</td>
                                        <td data-label="Column 2">Description</td>
                                    </tr>

                                    <tr>
                                        <td data-label="Column 1">Item</td>
                                        <td data-label="Column 2">Description</td>
                                    </tr>

                                    <tr>
                                        <td data-label="Column 1">Item</td>
                                        <td data-label="Column 2">Description</td>
                                    </tr>
                                </tbody></table>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}