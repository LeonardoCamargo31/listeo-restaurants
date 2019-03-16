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
                        <nav id="navigation" class="style-1">
                            <ul id="responsive">
                                <li><a href="#">Home</a>
                                    <ul>
                                        <li><a href="index.html">Home 1</a></li>
                                        <li><a href="index-2.html">Home 2</a></li>
                                        <li><a href="index-3.html">Home 3</a></li>
                                        <li><a href="index-4.html">Home 4</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Listings</a>
                                    <ul>
                                        <li><a href="#">List Layout</a>
                                            <ul>
                                                <li><a href="listings-list-with-sidebar.html">With Sidebar</a></li>
                                                <li><a href="listings-list-full-width.html">Full Width</a></li>
                                                <li><a href="listings-list-full-width-with-map.html">Full Width + Map</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Grid Layout</a>
                                            <ul>
                                                <li><a href="listings-grid-with-sidebar-1.html">With Sidebar 1</a></li>
                                                <li><a href="listings-grid-with-sidebar-2.html">With Sidebar 2</a></li>
                                                <li><a href="listings-grid-full-width.html">Full Width</a></li>
                                                <li><a href="listings-grid-full-width-with-map.html">Full Width + Map</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Half Screen Map</a>
                                            <ul>
                                                <li><a href="listings-half-screen-map-list.html">List Layout</a></li>
                                                <li><a href="listings-half-screen-map-grid-1.html">Grid Layout 1</a></li>
                                                <li><a href="listings-half-screen-map-grid-2.html">Grid Layout 2</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="listings-single-page.html">Single Listing</a></li>
                                    </ul>
                                </li>
                                <li><a class="current" href="#">User Panel</a>
                                    <ul>
                                        <li><a href="dashboard.html">Dashboard</a></li>
                                        <li><a href="dashboard-messages.html">Messages</a></li>
                                        <li><a href="dashboard-bookings.html">Bookings</a></li>
                                        <li><a href="dashboard-my-listings.html">My Listings</a></li>
                                        <li><a href="dashboard-reviews.html">Reviews</a></li>
                                        <li><a href="dashboard-bookmarks.html">Bookmarks</a></li>
                                        <li><a href="dashboard-add-listing.html">Add Listing</a></li>
                                        <li><a href="dashboard-my-profile.html">My Profile</a></li>
                                        <li><a href="dashboard-invoice.html">Invoice</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Pages</a>
                                    <div class="mega-menu mobile-styles three-columns">

                                        <div class="mega-menu-section">
                                            <ul>
                                                <li class="mega-menu-headline">Pages #1</li>
                                                <li><a href="pages-user-profile.html"><i class="sl sl-icon-user"></i> User Profile</a></li>
                                                <li><a href="pages-booking.html"><i class="sl sl-icon-check"></i> Booking Page</a></li>
                                                <li><a href="pages-add-listing.html"><i class="sl sl-icon-plus"></i> Add Listing</a></li>
                                                <li><a href="pages-blog.html"><i class="sl sl-icon-docs"></i> Blog</a></li>
                                            </ul>
                                        </div>
                                        <div class="mega-menu-section">
                                            <ul>
                                                <li class="mega-menu-headline">Pages #2</li>
                                                <li><a href="pages-contact.html"><i class="sl sl-icon-envelope-open"></i> Contact</a></li>
                                                <li><a href="pages-coming-soon.html"><i class="sl sl-icon-hourglass"></i> Coming Soon</a></li>
                                                <li><a href="pages-404.html"><i class="sl sl-icon-close"></i> 404 Page</a></li>
                                                <li><a href="pages-masonry-filtering.html"><i class="sl sl-icon-equalizer"></i> Masonry Filtering</a></li>
                                            </ul>
                                        </div>
                                        <div class="mega-menu-section">
                                            <ul>
                                                <li class="mega-menu-headline">Other</li>
                                                <li><a href="pages-elements.html"><i class="sl sl-icon-settings"></i> Elements</a></li>
                                                <li><a href="pages-pricing-tables.html"><i class="sl sl-icon-tag"></i> Pricing Tables</a></li>
                                                <li><a href="pages-typography.html"><i class="sl sl-icon-pencil"></i> Typography</a></li>
                                                <li><a href="pages-icons.html"><i class="sl sl-icon-diamond"></i> Icons</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </li>

                            </ul>
                        </nav>
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
                            <a href="dashboard-add-listing.html" class="button border with-icon">Add Listing <i class="sl sl-icon-plus"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="clearfix"></div>
    </Fragment>
)