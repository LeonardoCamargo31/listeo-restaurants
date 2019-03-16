import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'

import UserReducer from '../user/userReducer'
import RestaurantReducer from '../restaurant/restaurantReducer'

const rootReducer = combineReducers({
    user: UserReducer,
    restaurant: RestaurantReducer,
    form: formReducer,
    toastr:toastrReducer
})

export default rootReducer