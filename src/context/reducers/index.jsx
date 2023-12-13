import openSnackbarReducer from './openSnackBarReducer.jsx'
import sessionShoppingCartReducer from './sessionShoppingCartReducer.jsx'
import sessionUserReducer from './sessionUserReducer.jsx'

export const mainReducer = ({sessionUser, sessionShoppingCart,openSnackbar}, action) => {
    return {
        sessionUser: sessionUserReducer(sessionUser, action),
        sessionShoppingCart: sessionShoppingCartReducer(sessionShoppingCart, action),
        openSnackbar: openSnackbarReducer(openSnackbar, action)
    }
}