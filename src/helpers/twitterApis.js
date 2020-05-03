import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://api.twitter.com',
    headers: { "User-Token": this.userToken }
});

export class TwitterApis {
    acquireToken() {
        axiosInstance({
            method: 'post',
            url: '/oauth2/token',
            data: {
                grant_type: 'client_credentials'
            }
        });
    }
}