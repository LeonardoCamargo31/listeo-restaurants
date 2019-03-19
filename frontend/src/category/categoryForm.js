import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'

import { init, create } from './categoryActions'

 

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


class CategoryForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <div class="row">
                <div class="col-lg-12">

                    <div id="add-listing">
                        <form onSubmit={handleSubmit(this.props.create)}>
                            <div class="add-listing-section">

                                <div class="add-listing-headline">
                                    <h3><i class="sl sl-icon-doc"></i> Basic Informations</h3>
                                </div>

                                <div class="row with-forms">
                                    <div class="col-md-12">
                                        <Field name="title" component={renderFieldInput} label="Nome" cols="12 4" placeholder="Informe o nome" validate={[required, maxLength50]} />

                                        <button type="submit" class="button preview">Enviar <i class="fa fa-arrow-circle-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

CategoryForm = reduxForm({ form: 'categoryForm', destroyOnUnmount: false })(CategoryForm)

const mapDispatchToProps = dispatch => bindActionCreators({ init, create }, dispatch)

export default connect(null, mapDispatchToProps)(CategoryForm)