import HttpClient from '../services/HttpClient'
import axios from 'axios'

const instance = axios.create();
instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

export const getProducts = (request) => {
    return new Promise( (resolve, eject) => {
        instance.get(`/api/product?pageIndex=${request.pageIndex}&pageSize=${request.pageSize}&search=${request.search}`).then(response => {
            resolve(response)
        })
    })
}

export const getProduct = (id) => {
    return new Promise( (resolve, eject) => {
        instance.get(`/api/product/${id}`).then(response => {
            resolve(response);
        }).catch( err => {
            resolve(err.response);
        });
    })
}