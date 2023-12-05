
export const initialState = {
    user:{
        name: "",
        lastname: "",
        email: "",
        image: ""
    },
    authenticated: false
}

const sessionUserReducer = (state = initialState, action ) =>{

    switch(action.type){
        case "LOGIN":
            return {
                ...state,
                user: action.session,
                authenticated: action.authenticated
            };
        case "LOGOUT":
            return{
                ...state,
                user: action.newUser,
                authenticated: action.authenticated
            };
        case "UPDATE_USER":
            return{
                ...state,
                user: action.newUser,
                authenticated: action.authenticated
            };
        default:
            return state;
    }
}

export default sessionUserReducer;