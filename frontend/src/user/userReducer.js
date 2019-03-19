//estado inicial do meu usuario
const INITIAL_VALUES = {
    user:{
        name: "inicial",
        email: "inicial@inicial.com"
    }
}

//essa função contem meu estado inicial
//toda vez que uma action é disparada recebemos dois parametros
//state=> representa o estado antes da alteração que a action pretende alterar
export default (state = {}, action) => {
    //console.log(action.payload)

    switch (action.type) {
        case 'USER_LOADED':
        console.log(action.payload.data[0])
            return { ...state, user: action.payload.data[0] }
        default:
            return state
    }
}