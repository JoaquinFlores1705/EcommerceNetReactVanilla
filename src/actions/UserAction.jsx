import HttpClient from '../services/HttpClient'
import axios from 'axios'
import { uploadImage } from '../firebase';

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

export const updateUser = async (id, user, dispatch) =>{
    if(user.file){
        const urlImage = await uploadImage(user.file);
        user.image = urlImage;
    }
    return new Promise((resolve, eject) => {
        HttpClient.put(`/api/user/update/${id}`, user).then(response => {
            dispatch({
                type: "UPDATE_USER",
                newUser: response.data,
                authenticated: true
            });
            resolve(response);
        })
        .catch( err => {
            resolve(err.response);
        })
    });
}

export const getUsers = (request) =>{
    return new Promise((resolve, eject) => {
        HttpClient.get(`/api/user/pagination?pageIndex=${request.pageIndex}&pageSize=${request.pageSize}&search=${request.search}`)
        .then(response => {
            resolve(response);
        })
        .catch( err => {
            resolve(err.response);
        })
    });
}

export const getUserById = (id) =>{
    return new Promise((resolve, eject) => {
        HttpClient.get(`/api/user/account/${id}`)
        .then(response => {
            resolve(response);
        })
        .catch( err => {
            resolve(err.response);
        })
    });
}

export const addRoleUser = (id, role, dispatch) =>{
    return new Promise((resolve, eject) => {
        HttpClient.put(`/api/user/role/${id}`, role)
        .then(response => {
            resolve(response);
        })
        .catch( err => {
            resolve(err.response);
        })
    });
}