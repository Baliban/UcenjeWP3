import axios from "axios";


export const HttpService = axios.create({

    baseURL: 'http://mrb.tryasp.net/api/v1/',
    headers: {
        'Content-Type' : 'application/json'
    }


});