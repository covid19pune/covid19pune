let axios = require('axios');
let qs = require('qs');

let axiosInstance = axios.create({
    baseURL: 'https://api.twitter.com',
    headers: {
        "Content-Type": 'application/x-www-form-urlencoded',
        "Authorization": "Basic S1F0TzB4ZmVUZzhQOVA4RDFXZWxYYk9HcjpOZk05NmZtVkU2QzkzNGlNc1lpWlpGY1J2dFRGT0VjcGpnS1AxUm5hbmdPZnNCOFEyYw=="
    }
});

axiosInstance({
    method: 'post',
    url: '/oauth2/token',
    data: qs.stringify({
        grant_type: 'client_credentials'
    })
}).then(data => {
    console.log("data;;;;;", data);
})
    .catch(error => {
        console.log("erroro;;;;;", error);
    })