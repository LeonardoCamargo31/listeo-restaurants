import axios from 'axios'
import {reset as resetForm, initialize} from 'redux-form'

const BASE_URL = 'http://localhost:3001'

//estado inicial do meu usuario
const INITIAL_VALUES = {
    user:{
        name: "inicial",
        email: "inicial@inicial.com"
    }
}

export function update(values) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios.put(`${BASE_URL}/user/${id}`, values)
            .then(resp => {
                dispatch(getUser())
            })
            .catch(e => {
                console.log(e)
            })
    }
}

export function getUser() {
    const id=2
    const request = axios.get(`${BASE_URL}/user/${id}`) 
    console.log(request)
    return {
        type: 'USER_LOADED',
        payload: request,
    }
}


//nosso formulario no estado inicial
export function init() {
    return [        
        //getUser(),
        initialize('billingCycleForm', INITIAL_VALUES)        
    ]
}