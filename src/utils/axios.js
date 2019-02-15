import axios from 'axios';

const token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6Im11bmVuZWRldmVsb3BlckBnbWFpbC5jb20iLCJleHAiOjE1NTAyMjE1NTYsImVtYWlsIjoibXVuZW5lZGV2ZWxvcGVyQGdtYWlsLmNvbSJ9.50F1VH04-k3o5YND7WXkUncpqujh22hO3fzCKMnJXGs"
const instance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${token}`
  }
});

export default instance;
