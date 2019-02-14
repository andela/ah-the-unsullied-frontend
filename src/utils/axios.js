import axios from 'axios';

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6Im11bmVuZWRldmVsb3BlckBnbWFpbC5jb20iLCJleHAiOjE1NTAxNjQ4ODAsImVtYWlsIjoibXVuZW5lZGV2ZWxvcGVyQGdtYWlsLmNvbSJ9.qLwP2QnLEEs8lsqzn7pdojcapw0csjdT-1j5jziTdzo';
const instance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${token}`
  }
});

export default instance;
