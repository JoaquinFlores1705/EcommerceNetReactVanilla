export const initialState = {
    id: '',
    items: []
}

const sessionShoppingCartReducer = (state = initialState, action ) =>{
    switch(action.type){
        case "SESSION_CART":
            return {
                ...state,
                id: action.id,
                items: action.items
            };
        default:
            return state;
    }
}

export default sessionShoppingCartReducer;