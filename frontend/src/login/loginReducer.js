const userKey = '_listeo_user'//qualquer nome
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false
}
//essa função contem meu estado inicial
//toda vez que uma action é disparada recebemos dois parametros
//state=> representa o estado antes da alteração que a action pretende alterar
export default (state = INITIAL_STATE, action) => {
    //console.log(action.payload)
    switch (action.type) {
        //quando token é validado
        case 'TOKEN_VALIDATED':
            if (action.payload) {
                return { ...state, validToken: true }
            } else {
                //garantindo que esta removendo o localStorage
                localStorage.removeItem(userKey)
                return { ...state, validToken: false, user: null }
            }
        //quando o usuario é obtido
        case 'USER_FETCHED':
            //serializando o objeto recebido action.payload
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, user: action.payload, validToken: true }
        default:
            return state
    }
}