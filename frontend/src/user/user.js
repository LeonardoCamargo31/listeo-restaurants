import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TitleBar from '../common/titleBar'


import { init, update ,updatePassword} from './userActions'

const required = value => value ? undefined : 'Campo requerido'
const maxLength = max => value =>
    value && value.length > max ? `Deve ter ${max} caracteres ou menos` : undefined
const maxLength50 = maxLength(50)
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

class User extends Component {

    componentWillMount() {

        this.props.init()
    }

    render() {
        const { handleSubmit } = this.props
        const itens = [{ link: '/index', text: 'Home' }]

        return (
            <div class="dashboard-content">
                <TitleBar title="Meu perfil" itens={itens} current="Meu perfil" />

                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="dashboard-list-box margin-top-0">
                            <h4 class="gray">Profile Details</h4>
                            <div class="dashboard-list-box-static">
                                <form onSubmit={handleSubmit(this.props.update)}>
                                    <div class="edit-profile-photo">
                                        <img src="assets/images/user-avatar.jpg" alt="" />
                                        <div class="change-photo-btn">
                                            <div class="photoUpload">
                                                <span><i class="fa fa-upload"></i> Upload Photo</span>
                                                <input type="file" class="upload" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="my-profile">
                                        <Field name="name" component={renderFieldInput} label="Nome" placeholder="Informe o nome" validate={[required, maxLength50]} />
                                        <Field name="email" component={renderFieldInput} label="E-mail" placeholder="Informe o e-mail" validate={[required, email, maxLength50]} />
                                    </div>

                                    <button type="submit" class="button preview">Enviar <i class="fa fa-arrow-circle-right"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="dashboard-list-box margin-top-0">
                            <h4 class="gray">Change Password</h4>
                            <div class="dashboard-list-box-static">
                                <div class="my-profile">
                                    <form onSubmit={handleSubmit(this.props.updatePassword)}>
                                        <label class="margin-top-0">Current Password</label>
                                        <input type="password" />

                                        <label>New Password</label>
                                        <input type="password" />

                                        <label>Confirm New Password</label>
                                        <input type="password" />

                                        <button type="submit" class="button preview">Enviar <i class="fa fa-arrow-circle-right"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="copyrights">© 2017 Listeo. All Rights Reserved.</div>
                    </div>

                </div>
            </div>
        )
    }
}

User = reduxForm({ form: 'UserForm', destroyOnUnmount: false })(User)


const mapStateToProps = state => ({ initialValues: state.login.user.user })


//com o bindActionCreators
//ao invés de usar this.props.dispatch(toggleTodo(id)); só usamos
const mapDispatchToProps = dispatch => bindActionCreators({ init, update ,updatePassword}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(User)