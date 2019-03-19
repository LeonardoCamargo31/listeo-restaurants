import React, { Fragment } from 'react'

export default props => (
    <Fragment>
        <header id="header-container" class="fixed fullwidth dashboard">
            <div id="header" class="not-sticky">
                <div class="container">
                    <div class="left-side">
                        <div id="logo">
                            <a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
                            <a href="index.html" class="dashboard-logo"><img src="assets/images/logo2.png" alt="" /></a>
                        </div>
                        <div class="mmenu-trigger">
                            <button class="hamburger hamburger--collapse" type="button">
                                <span class="hamburger-box">
                                    <span class="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="right-side">
                        <div class="header-widget">
                            <div class="user-menu">
                                <div class="user-name"><span><img src="images/dashboard-avatar.jpg" alt="" /></span>My Account</div>
                                <ul>
                                    <li><a href="dashboard.html"><i class="sl sl-icon-settings"></i> Dashboard</a></li>
                                    <li><a href="dashboard-messages.html"><i class="sl sl-icon-envelope-open"></i> Messages</a></li>
                                    <li><a href="dashboard-bookings.html"><i class="fa fa-calendar-check-o"></i> Bookings</a></li>
                                    <li><a href="index.html"><i class="sl sl-icon-power"></i> Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="clearfix"></div>
    </Fragment>
)