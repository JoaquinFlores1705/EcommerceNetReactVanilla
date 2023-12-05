import HttpClient from '../services/HttpClient'
import axios from 'axios'

const instance = axios.create();
instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

export const registerUser = (user,dispatch) => {
    return new Promise((resolve, eject) => {
        instance.post('/api/user/register', user).then(response => {
            dispatch({
                type: "LOGIN",
                session: response.data,
                authenticated: true
            });
            resolve(response);
        })
        .catch( err => {
            resolve(err.response);
        })
    });
}

export const loginUser = (user, dispatch) =>{
    return new Promise((resolve, eject) => {
        instance.post('/api/user/login', user).then(response => {
            dispatch({
                type: "LOGIN",
                session: response.data,
                authenticated: true
            });
            resolve(response);
        })
        .catch( err => {
            resolve(err.response);
        })
    });
}

export const getUser = (dispatch) =>{
    return new Promise((resolve, eject) => {
        HttpClient.get('/api/user').then(response => {
            dispatch({
                type: "LOGIN",
                session: response.data,
                authenticated: true
            });
            resolve(response);
        })
        .catch( err => {
            resolve(err.response);
        })
    });
}