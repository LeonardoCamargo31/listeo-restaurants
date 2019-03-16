import React, { Component } from 'react'

//formValueSelector responsavel por pegar um valor dentro do form
import {reduxForm, Field, formValueSelector} from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//bindActionCreators ele vai pegar o objeto de actions  
//e vai mapear em forma de propriedades para o nosso componente

//o connect, ele segue um padrão chamado high order component
//é um pattern do react para compartilhar alguma informação para algum componente 

//esse componente no caso, queremos o estado do redux

// * => importar tudo 
import {init} from './userActions'


import LabelAndInput from '../common/labelAndInput'

class User extends Component {

    render() {
        return (
            <div class="dashboard-content">

                <div id="titlebar">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>My Profile</h2>
                            <nav id="breadcrumbs">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Dashboard</a></li>
                                    <li>My Profile</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <div class="row">

                    <div class="col-lg-6 col-md-12">
                        <div class="dashboard-list-box margin-top-0">
                            <h4 class="gray">Profile Details</h4>
                            <div class="dashboard-list-box-static">

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
                                    <Field name="name" component={LabelAndInput} label="Nome" cols="12 4" placeholder="Informe o nome"/>
                                    <Field name="email" component={LabelAndInput} label="E-mail" cols="12 4" placeholder="Informe o email"/>
                                </div>

                                <button class="button margin-top-15">Save Changes</button>

                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="dashboard-list-box margin-top-0">
                            <h4 class="gray">Change Password</h4>
                            <div class="dashboard-list-box-static">
                                <div class="my-profile">
                                    <label class="margin-top-0">Current Password</label>
                                    <input type="password" />

                                    <label>New Password</label>
                                    <input type="password" />

                                    <label>Confirm New Password</label>
                                    <input type="password" />

                                    <button class="button margin-top-15">Change Password</button>
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

User = reduxForm({form: 'billingCycleForm', destroyOnUnmount:false}) (User)

//com o bindActionCreators
//ao invés de usar this.props.dispatch(toggleTodo(id)); só usamos
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

export default connect(mapDispatchToProps)(User)