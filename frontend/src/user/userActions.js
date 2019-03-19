import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

const BASE_URL = 'http://localhost:3001'

export function update(values) {
    return dispatch => {
        const id = values.id 
        axios.put(`${BASE_URL}/user/${id}`, values)
            .then(resp => {
                dispatch(getUser())
            })
            .catch(e => {
                console.log(e)
            })
    }
}

export function updatePassword(values) {
    return dispatch => {
        const id = values.id 
        axios.put(`${BASE_URL}/user/${id}`, values)
            .then(resp => {
                dispatch(getUser())
            })
            .catch(e => {
                console.log(e)
            })
    }
}

function getUser() {
    const id = 2
    const request =  axios.get(`${BASE_URL}/user/${id}`)
    return {
        type: 'USER_LOADED',
        payload: request
    }
}

export function init() {
    return [
        getUser(),
        initialize('UserForm')
    ]
}