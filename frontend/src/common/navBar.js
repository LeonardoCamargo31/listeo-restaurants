import React, { Fragment } from 'react'

export default props => (
    <Fragment>
        <a href="#" class="dashboard-responsive-nav-trigger"><i class="fa fa-reorder"></i> Dashboard Navigation</a>
        <div class="dashboard-nav">
            <div class="dashboard-nav-inner">
                <ul data-submenu-title="Principal">
                    <li><a href="/restaurant"><i class="sl sl-icon-settings"></i> Restaurante <span class="nav-tag messages">2</span></a></li>
                    <li><a href="/category"><i class="sl sl-icon-envelope-open"></i> Categoria</a></li>
                    <li><a href="/product"><i class="fa fa-calendar-check-o"></i> Produtos</a></li>
                </ul>
                <ul data-submenu-title="Conta">
                    <li class="active"><a href="/user"><i class="sl sl-icon-user"></i> Meu perfil</a></li>
                    <li><a href="/logout"><i class="sl sl-icon-power"></i> Sair</a></li>
                </ul>
            </div>
        </div>
    </Fragment>
)