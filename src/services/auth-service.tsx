import axios from 'axios';

// This should come from Actual Authorization after implementing Login/Logout feature.
const AUTH_TOKEN = 'mock-auth-token-hkjh8kjhkj897';

export function setAxiosDefaults() {
    axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    axios.defaults.headers.get['Content-Type'] = 'application/json';
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}

