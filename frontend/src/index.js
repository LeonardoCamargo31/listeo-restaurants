import React from 'react';
import ReactDOM from 'react-dom';
import ReduxToastr from 'react-redux-toastr'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import reducers from './main/reducers'
import Routes from './main/routes'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//applyMiddleware(promise) retorna uma função, cujo o parametro é (createStore)
//e o resultado disso retorna uma função cujo o parametro é (reducers)
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-right"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick />
        <Routes />
    </Provider>
    , document.getElementById('root'))