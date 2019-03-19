import React, { Fragment , Component} from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { logout } from '../login/loginActions'

class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <a href="#" class="dashboard-responsive-nav-trigger"><i class="fa fa-reorder"></i> Dashboard Navigation</a>
                <div class="dashboard-nav">
                    <div class="dashboard-nav-inner">
                        <ul data-submenu-title="Principal">
                            <li><Link to="/restaurant"><i class="sl sl-icon-settings"></i> Restaurante <span class="nav-tag messages">2</span></Link></li>
                            <li><Link to="/category"><i class="sl sl-icon-envelope-open"></i> Categoria</Link></li>
                            <li><Link to="/product"><i class="fa fa-calendar-check-o"></i> Produtos</Link></li>
                        </ul>
                        <ul data-submenu-title="Conta">
                            <li class="active"><Link to="/user"><i class="sl sl-icon-user"></i> Meu perfil</Link></li>
                            <li><a href="#" onClick={this.props.logout}><i class="sl sl-icon-power"></i> Sair</a></li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)

export default connect(null, mapDispatchToProps)(Navbar)