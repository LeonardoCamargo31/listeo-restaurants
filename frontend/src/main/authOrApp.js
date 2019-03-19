import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import App from './app'
import Auth from '../login/login'
import { validateToken } from '../login/loginActions'

class AuthOrApp extends Component {

    //antes de exibir/render ele vai validar o token
    componentWillMount() {
        if (this.props.login.user) {
            this.props.validateToken(this.props.login.user.token)
        }
    }


    render() {
        const { user, validToken } = this.props.login
        console.log(validToken)
        //se usuario existir e token estiver valido, retorna o app
        if (user && validToken) {
            //então vou pegar esse token valido e aplicar no cabeçalho, para todas minhas requisições
            axios.defaults.headers.common['authorization'] = user.token
            return <App>{this.props.children}</App>
        }
        //caso contrario exibe o auth
        else if (!user && !validToken) {
            return <Auth />
        }
        //ele esta esperando a validação do token
        else {
            return false
        }
    }
}

const mapStateToProps = state => ({ login: state.login })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken },dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)