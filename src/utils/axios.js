import axios from 'axios';

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6Im11bmVuZWRldmVsb3BlckBnbWFpbC5jb20iLCJleHAiOjE1NTAxNzg4NjQsImVtYWlsIjoibXVuZW5lZGV2ZWxvcGVyQGdtYWlsLmNvbSJ9.XkH6AJg5sRUNo47qX0Ns4EScHte-1fD4oiiEWFnDfSY"
const instance = axios.create({
    baseURL: process.env.BASE_URL,
    headers:{
        "content-type": "application/json", 
        "Authorization": `Bearer ${token}` }
});

export default instance;
