import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

const BASE_URL = 'http://localhost:3001'


export function authenticate(values) {
    return dispatch => {
        axios.post(`${BASE_URL}/auth/authenticate`, values)
            .then(resp => {
                dispatch({ type: 'USER_FETCHED', payload: resp.data })
            })
            .catch(e => {
                toastr.error("Erro", "Email e/ou senha inavalida")
                console.log(e)
            })
    }
}

//passando a action TOKEN_VALIDATED com  valor false
export function logout() {
    return { type: 'TOKEN_VALIDATED', payload: false }
}


//função para validar o token
export function validateToken(token) {
    return dispatch => {
        if (token) {
            axios.post(`${BASE_URL}/auth/validateToken`, { token })
                .then(resp => {
                    console.log('Token valido')
                    dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.valid })
                })
                .catch((e) =>{ 
                    console.log('Token inválido')
                    toastr.error("Erro", "Token inválido e/ou expirado")
                    dispatch({ type: 'TOKEN_VALIDATED', payload: false })
            })
        } else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false })
        }
    }
}