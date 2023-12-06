import HttpClient from '../services/HttpClient'
import axios from 'axios'

const instance = axios.create();
instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

export const getShoppingCart = (dispatch, id) => {
    return new Promise((resolve, eject) => {
        instance.get(`/api/shoppingcart?id=${id}`).then(response => {
            dispatch({
                type: "SESSION_CART",
                id: response.data.id,
                items: response.data.items
            });
            resolve(response);
        })
        .catch( err => {
            resolve(err.response);
        });
    });
}

export const setShoppingCart = (dispatch, shoppingCart) => {
    return new Promise((resolve, eject) => {
        instance.post('/api/shoppingcart', shoppingCart).then(response => {
            dispatch({
                type: "SESSION_CART",
                id: response.data.id,
                items: response.data.items
            });
            resolve(response);
        })
        .catch( err => {
            resolve(err.response);
        });
    });
}

export const addItem = (cart, item, dispatch) => {
    if(!cart.items){
        cart.items = [];
    }

    const index = cart.items.findIndex(i => i.id == item.id);

    if(index == -1){
        cart.items.push(item);
    }else{
        cart.items[index].cantidad += item.cantidad;
    }

    setShoppingCart(dispatch, cart);
}