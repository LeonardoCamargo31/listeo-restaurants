//estado inicial da minha lista de restaurantes
const INITIAL_STATE = {list: []}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'RESTAURANTS_LOAD':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}