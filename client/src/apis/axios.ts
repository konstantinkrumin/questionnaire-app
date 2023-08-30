import axios from 'axios';

export const serverAxios = axios.create({
	baseURL: import.meta.env.VITE_APP_SERVER_URL + '/api/v1',
	withCredentials: false
});
