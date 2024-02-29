export const API_BASE_URL = import.meta.env.VITE_APP_URL;

export const ENDPOINT = {
  login: `${API_BASE_URL}/users/login`,
  users: `${API_BASE_URL}/users`,
};
