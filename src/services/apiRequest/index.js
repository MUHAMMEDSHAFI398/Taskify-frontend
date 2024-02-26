import { toUrlParams} from "utils/toQueryString";
import axios from "../../services/axios/index";
import Swal from 'sweetalert2'

class APIRequest {
    constructor() {
        this.instance = axios;
        this.setupInterceptors();
    }

    setupInterceptors() {
        this.instance.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('token');
                config.headers.Authorization = `Bearer ${token}`;
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        this.instance.interceptors.response.use(
            (response) => {
                // Handle success responses
                return response;
            },
            (error) => {
                const url = error?.request?.responseURL
                if (!url.includes("/auth/login")) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: error?.message,
                      });
                }
                return Promise.reject(error);
            }
        );
    }

    get(url,query ={}) {
        return this.instance.get(`${url}${toUrlParams(query)}`);
    }

    post(url, body) {
        return this.instance.post(url, body);
    }

    put(url, body) {
        return this.instance.put(url, body);
    }

    patch(url, body) {
        return this.instance.put(url, body);
    }

    delete(url) {
        return this.instance.put(url);
    }
}

export default APIRequest;
