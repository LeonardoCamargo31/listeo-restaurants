import React, { Component } from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { authenticate } from './loginActions'

const required = value => value ? undefined : 'Campo requerido'
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Endereço de email invalido' : undefined

const renderFieldInput = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && ((error && <div className="error">{error}</div>) || (warning && <div className="error">{warning}</div>))}
        </div>
    </div>
)

class Login extends Component {
    render() {
        const { handleSubmit } = this.props

        return (
            <div id="dashboard">
                <div className='dashboard-content'>
                    <div class="row">
                        <div id="sign-in-dialog">
                            <div id="add-listing">
                                <form onSubmit={handleSubmit(this.props.authenticate)}>
                                    <div class="add-listing-section">

                                        <div class="add-listing-headline">
                                            <h3><i class="sl sl-icon-user"></i> Entrar</h3>
                                        </div>

                                        <Field type="text" name="email" component={renderFieldInput} label="E-mail" placeholder="Informe o nome" validate={[required, email]} />

                                        <Field type="password" name="password" component={renderFieldInput} label="Senha" placeholder="Informe o nome" validate={[required]} />

                                        <div class="form-row">
                                            <button type="submit" class="button preview">Entrar <i class="fa fa-arrow-circle-right"></i></button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Login = reduxForm({ form: 'LoginForm'})(Login)

const mapDispatchToProps = dispatch => bindActionCreators({ authenticate }, dispatch)

export default connect(null, mapDispatchToProps)(Login)