import axios from "axios";


export const HttpService = axios.create({

    baseURL: 'https://mariobaliban3378-001-site1.itempurl.com/api/v1',
    headers: {
        'Content-Type' : 'application/json'
    }


});