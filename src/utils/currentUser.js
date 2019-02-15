import jwt_decode from "jwt-decode";
localStorage.getItem('user')

export const getCurrentUser = () => {

  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};
