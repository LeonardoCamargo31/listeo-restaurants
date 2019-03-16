import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

import List from './restaurantList'
import Form from './restaurantForm'
import TitleBar from '../common/titleBar'

import { init } from './restaurantActions'

class Restaurant extends Component {
    componentDidMount() {
        this.props.init()
    }

    render() {
        const itens=[{link:'/index',text:'Home'}]
        return (
            <div class="dashboard-content">
                <TitleBar title="Restaurante" itens={itens} current="Restaurante"/>
                <Form />
                <List />
                <div class="col-md-12">
                    <div class="copyrights">© 2017 Listeo. All Rights Reserved.</div>
                </div>
            </div>
        )
    }
}

//sempre que getlist for chamado, automaticamente faz o dispach e chama os reducers
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(null, mapDispatchToProps)(Restaurant)