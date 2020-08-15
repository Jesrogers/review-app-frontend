const request = async (endpoint, { body, ...customConfig } = {}) => {
  const headers = { 'Content-Type': 'application/json' };
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${endpoint}`, config);
  const data = response.json();

  if (response.ok) {
    return data;
  } else {
    Promise.reject(data);
  }
};

export default request;
