import router from '../router/index.js'

const BASE_URL = process.env.NODE_ENV === 'production' ?
    '/api/' :
    '//localhost:3030/api/'

import Axios from 'axios';
var axios = Axios.create({
    withCredentials: true
});


export default {
    get(endpoint, data) {
        return request(endpoint, 'GET', data)
    },
    post(endpoint, data) {
        return request(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        return request(endpoint, 'PUT', data)
    },
    delete(endpoint, data) {
        return request(endpoint, 'DELETE', data)
    }
}


async function request(endpoint, method = 'get', data = null) {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data
        })
        return res.data;
    } catch (err) {
        if (err.response.status === 401) {
            router.push('/');
        }
    }
}