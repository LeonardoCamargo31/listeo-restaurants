import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

const BASE_URL = 'http://localhost:3001'


export function getList() {
    const request = axios.get(`${BASE_URL}/category`)
    return {
        type: 'CATEGORIES_LOAD',
        payload: request
    }
}

export function create(values) {
    const method = values.id ? 'put' : 'post'
    const id = values.id ? values.id : ''

    return dispatch => {
        axios[method](`${BASE_URL}/category/${id}`, values)
            .then(resp => {
                toastr.success("Sucesso", "Operação Realizada com Sucesso")
                dispatch(init())
            })
            .catch(errors => {
                toastr.error("Erro", "Erro na operação")
                console.log(errors)
            })
    }
}

//recebe por parametro o ciclo de pagamento, então vai ter o billingCycle da linha clicada
export function showUpdate(restaurant) {
    toastr.info("Info", "Categoria carregado com sucesso")
    return initialize('categoryForm', restaurant)
}

export function showDelete(restaurant) {
    const id = restaurant.id 
    return dispatch => {
        axios.delete(`${BASE_URL}/category/${id}`)
            .then(resp => {
                toastr.success("Sucesso", "Categoria deletado com sucesso!")
                dispatch(init())
            })
            .catch(errors => {
                toastr.error("Erro", "Não foi possivel deletar")
                console.log(errors)
            })
    }
}

export function init() {
    return [
        getList(),
        initialize('categoryForm')
    ]
}