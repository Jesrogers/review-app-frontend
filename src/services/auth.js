import request from '../utils/request';
const baseUrl = '/api/auth';

const register = async (username, password) => {
  const newUser = {
    username: username,
    password: password,
  };

  const registerResponse = await request(`${baseUrl}/register`, {
    body: newUser,
  });
};

const login = async (username, password) => {
  const credentials = {
    username: username,
    password: password,
  };

  await request(`${baseUrl}/login`, {
    body: credentials,
  });
};

const checkVerified = async () => {
  return await request(`${baseUrl}/is-verified`);
};

const logout = async () => {
  await request(`${baseUrl}/logout`, {
    method: 'POST',
  });
};

export default { register, login, checkVerified, logout };
