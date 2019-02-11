import axios from 'axios';

const token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6Im11bmVuZWRldmVsb3BlckBnbWFpbC5jb20iLCJleHAiOjE1NTAxNDEzNDMsImVtYWlsIjoibXVuZW5lZGV2ZWxvcGVyQGdtYWlsLmNvbSJ9.uQfASn8eB6gGnD52qDbueiCum6tEz7utkJzNL0JwanE"
const instance = axios.create({
    baseURL: process.env.BASE_URL,
    headers:{
        "content-type": "application/json", 
        "Authorization": `Bearer ${token}` }
});

export default instance;