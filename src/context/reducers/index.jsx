import sessionShoppingCartReducer from './sessionShoppingCartReducer.jsx'
import sessionUserReducer from './sessionUserReducer.jsx'

export const mainReducer = ({sessionUser, sessionShoppingCart}, action) => {
    return {
        sessionUser: sessionUserReducer(sessionUser, action),
        sessionShoppingCart: sessionShoppingCartReducer(sessionShoppingCart, action),
    }
}