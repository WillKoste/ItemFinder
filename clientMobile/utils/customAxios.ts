import axios from 'axios';

const customAxios = axios.create({
	baseURL: `http://10.0.2.2:5000`
});

export default customAxios;
