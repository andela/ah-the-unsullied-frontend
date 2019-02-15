import axios from 'axios';

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo2LCJ1c2VybmFtZSI6InNhbWltYnVnd2FAZ21haWwuY29tIiwiZXhwIjoxNTUwMjExNDkwLCJlbWFpbCI6InNhbWltYnVnd2FAZ21haWwuY29tIn0.Pv8ZvePgWs13WAuRDip2cXQZXtzP0SJgDMqZ2ItW4ks';
const instance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${token}`
  }
});

export default instance;
