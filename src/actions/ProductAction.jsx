import { uploadImage } from '../firebase';
import HttpClient from '../services/HttpClient'
import axios from 'axios'

const instance = axios.create();
instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

export const updateProduct = async (id, product) => {

    if(product.file){
        const urlImage = await uploadImage(product.file);
        product.image = urlImage;
    }

    return new Promise( (resolve, reject) => {
        HttpClient.put(`api/product/${id}`, product)
        .then(res => {
            resolve(res)
        })
        .catch(err => {
            resolve(err.response)
        })
    }); 
}

export const registerProduct = async (product) => { 
    
    if(product.file){
        const urlImage = await uploadImage(product.file);
        product.image = urlImage;
    }

    return new Promise( (resolve, eject) => {
        HttpClient.post('/api/product', product).then(response => {
            resolve(response)
        })
        .catch(err => {
            resolve(err.response)
        })
    })
}

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