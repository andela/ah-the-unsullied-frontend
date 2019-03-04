import axios from 'axios';

const token = localStorage.getItem('jwtToken');
const instance = axios.create({
  baseURL: 'https://ah-the-unsullied-staging.herokuapp.com/api/',

  headers: {
    'Content-Type':'application/json',
    Authorization: `Bearer ${token}`
  }
});

export default instance;
