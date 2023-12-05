import sessionUserReducer from './sessionUserReducer.jsx'

export const mainReducer = ({sessionUser}, action) => {
    return {
        sessionUser: sessionUserReducer(sessionUser, action)
    }
}