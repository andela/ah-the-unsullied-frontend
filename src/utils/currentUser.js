import jwt_decode from "jwt-decode";


export const getCurrentUser = () => {

  const token = localStorage.getItem('jwtToken')
  const user = jwt_decode(token);
  return user
  console.log(user)
};
