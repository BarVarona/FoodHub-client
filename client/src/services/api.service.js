import axios from 'axios';
import { api_url } from "../consts/general.const";
import Cookies from 'universal-cookie';

export default class APIService {

    static async get(endpoint) {
        const cookies = new Cookies();
        const jwtToken = cookies.get("jwtToken");

        try {
            const res = await axios.get(api_url + endpoint, {
                headers: {
                    'x-access-token': jwtToken
                }
            });

            return res.data;
        }
        catch(err) {
            if (err.toJSON().status === 401) {
                console.log('Invalid token! Redirecting to the login page...')
                cookies.remove("jwtToken");
                cookies.remove("userId");
                window.location.replace('/login');
            }
            else {
                alert('Internal error! Please try again');
            }

            return null;
        }

    }

    static async post(endpoint, body) {
        const cookies = new Cookies();
        const jwtToken = cookies.get("jwtToken");

        try {
            const res = await axios.post(api_url + endpoint, body, {
                headers: {
                    'x-access-token': jwtToken
                }
            });

            return res.data;
        }
        catch(err) {
            if (err.toJSON().status === 401) {
                console.log('Invalid token! Redirecting to the login page...')
                cookies.remove("jwtToken");
                cookies.remove("userId");
                window.location.replace('/login');
            }
            else {
                alert('Internal error! Please try again');
                return null;
            }
        }
    }

    static async put(endpoint, body) {
        const cookies = new Cookies();
        const jwtToken = cookies.get("jwtToken");

        try {
            const res = await axios.put(api_url + endpoint, body, {
                headers: {
                    'x-access-token': jwtToken
                }
            });

            return res.data;
        }
        catch(err) {
            if (err.toJSON().status === 401) {
                console.log('Invalid token! Redirecting to the login page...')
                cookies.remove("jwtToken");
                cookies.remove("userId");
                window.location.replace('/login');
            }
            else {
                alert('Internal error! Please try again');
                return null;
            }
        }
    }

    static async uploadImage(endpoint, file) {
        const cookies = new Cookies();
        const jwtToken = cookies.get("jwtToken");

        try {
            const fd = new FormData();
            fd.append("file", file);
            const res = await axios.post(api_url + endpoint, fd, {
                headers: {
                    'x-access-token': jwtToken,
                    'Content-Type': 'multipart/form-data'
                }
            });

            return res.data;
        }
        catch(err) {
            if (err.toJSON().status === 401) {
                console.log('Invalid token! Redirecting to the login page...')
                cookies.remove("jwtToken");
                cookies.remove("userId");
                window.location.replace('/login');
            }
            else {
                alert('Internal error! Please try again');
                return null;
            }
        }
    }
}