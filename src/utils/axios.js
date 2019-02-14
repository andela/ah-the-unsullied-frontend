import axios from 'axios';

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6Im11bmVuZWRldmVsb3BlckBnbWFpbC5jb20iLCJleHAiOjE1NTAxNjYzNTcsImVtYWlsIjoibXVuZW5lZGV2ZWxvcGVyQGdtYWlsLmNvbSJ9.GRYVTh6aSEMe9L_5Izrl6U0yIiweBfZF1e8VnnxR-Pk"
const instance = axios.create({
    baseURL: process.env.BASE_URL,
    headers:{
        "content-type": "application/json", 
        "Authorization": `Bearer ${token}` }
});

export default instance;
