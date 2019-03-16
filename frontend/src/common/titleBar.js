import React from 'react'

import Breadcrumbs from './breadcrumbs'

export default props => (
    <div id="titlebar">
        <div class="row">
            <div class="col-md-12">
                <h2>{props.title}</h2>
                <Breadcrumbs itens={props.itens} current={props.current}/>
            </div>
        </div>
    </div>
)