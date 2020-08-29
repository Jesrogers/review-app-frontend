import request from '../utils/request';
const baseUrl = 'http://localhost:3001/api/auth';

const register = async (username, password) => {
  const newUser = {
    username: username,
    password: password,
  };

  const registerResponse = await request(`${baseUrl}/register`, {
    body: newUser,
  });
};

export default { register };
