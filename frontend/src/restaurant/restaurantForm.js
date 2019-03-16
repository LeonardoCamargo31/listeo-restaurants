import React, { Component } from 'react'

import { Field, reduxForm, formValueSelector } from 'redux-form'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LabelAndInput from '../common/labelAndInput'
import InputTextArea from '../common/inputTextArea'
import { init, create } from './restaurantActions'


const required = value => value ? undefined : 'Campo requerido'
const maxLength = max => value =>
    value && value.length > max ? `Deve ter ${max} caracteres ou menos` : undefined
const maxLength50 = maxLength(50)
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Endereço de email invalido' : undefined

const number = value => value && isNaN(Number(value)) ? 'Deve ser um número' : undefined



const renderFieldInput = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && ((error && <div className="error">{error}</div>) || (warning && <div className="error">{warning}</div>))}
        </div>
    </div>
)

const renderFieldTextArea = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <textarea {...input} class="WYSIWYG" cols="40" rows="3" spellcheck="true"></textarea>
            {touched && ((error && <div className="error">{error}</div>) || (warning && <div className="error">{warning}</div>))}
        </div>
    </div>
)



class RestaurantForm extends Component {
    render() {
        const { handleSubmit } = this.props
        console.log(this.props)

        return (
            <div class="row">
                <div class="col-lg-12">
                    <div id="add-listing">
                        <form onSubmit={handleSubmit(this.props.create)}>
                            <div class="add-listing-section">

                                <div class="add-listing-headline">
                                    <h3><i class="sl sl-icon-doc"></i> Cadastro de restaurante</h3>
                                </div>

                                <Field name="name" component={renderFieldInput} label="Nome" cols="12 4" placeholder="Informe o nome" validate={[required, maxLength50]} />

                                <Field name="address" component={renderFieldInput} label="Endereço" cols="12 4" placeholder="Informe o endereço" validate={[required]} />

                                <Field name="description" component={renderFieldTextArea} label="Descrição" validate={[required]} />

                                <Field name="email" component={renderFieldInput} label="E-mail" cols="12 4" placeholder="Informe o e-mail" validate={[required,email]} />

                                <Field name="telephone" component={renderFieldInput} label="Telefone" cols="12 4" placeholder="Informe o telefone" validate={[required]} />

                                <Field name="facebook" component={renderFieldInput} label="Facebook" cols="12 4" placeholder="Informe o Facebook" />

                                <Field name="twitter" component={renderFieldInput} label="Twitter" cols="12 4" placeholder="Informe o twitter" />

                                <button type="submit" class="button preview">Enviar <i class="fa fa-arrow-circle-right"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

RestaurantForm = reduxForm({ form: 'restaurantForm', destroyOnUnmount: false })(RestaurantForm)

const mapDispatchToProps = dispatch => bindActionCreators({ init, create }, dispatch)

export default connect(null, mapDispatchToProps)(RestaurantForm)