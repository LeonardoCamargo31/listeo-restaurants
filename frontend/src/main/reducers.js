import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import UserReducer from '../user/userReducer'
import LoginReducer from '../login/loginReducer'
import RestaurantReducer from '../restaurant/restaurantReducer'
import CategoryReducer from '../category/categoryReducer'

const rootReducer = combineReducers({
    user: UserReducer,
    login: LoginReducer,
    restaurant: RestaurantReducer,
    category: CategoryReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer