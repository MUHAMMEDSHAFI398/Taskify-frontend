import { toUrlParams } from "utils/toQueryString";
import axios from "../../services/axios/index";
import Swal from 'sweetalert2'
import {
    getAccessToken,
    getRefreshToken,
    updateAccessToken,
    updateRefreshToken
} from "reduxStore/slices/login";

class APIRequest {
    constructor() {
        this.instance = axios;
        this.setupInterceptors();
    }

    async refreshAccessToken() {
        const refreshToken = getRefreshToken() ||
            localStorage.getItem('refreshToken');
        if (!refreshToken) {
            throw new Error("No refresh token found");
        }
        try {
            const response = await axios.post(
                '/auth/refresh',
                {},
                {
                    headers: { Authorization: `Bearer ${refreshToken}` }
                }
            );

            const newAccessToken = response?.data?.accessToken;

            if (newAccessToken) {
                updateAccessToken(newAccessToken);
                localStorage.setItem('accessToken', newAccessToken);
                return newAccessToken;
            } else {
                throw new Error("Failed to refresh access token");
            }

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error?.message,
            });
        }
    }

    setupInterceptors() {
        this.instance.interceptors.request.use(
            (config) => {
                const accessToken = getAccessToken() ||
                    localStorage.getItem('accessToken');
                if (accessToken) {
                    config.headers.Authorization = `Bearer ${accessToken}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        this.instance.interceptors.response.use(
            (response) => {
                const accesssToken = response?.data?.accesssToken
                const refreshToken = response?.data?.refreshToken

                if (accesssToken) {
                    updateAccessToken(accesssToken)
                    localStorage.setItem('accessToken', accesssToken)
                }

                if (refreshToken) {
                    updateRefreshToken(refreshToken)
                    localStorage.setItem('refreshToken', refreshToken)
                }

                return response;
            },
            async (error) => {

                const url = error?.request?.responseURL;

                if (error.response &&
                    error.response.status === 401 &&
                    !url.includes("/auth/login")) {
                    try {

                        const newToken = await this.refreshAccessToken();

                        if (newToken) {

                            const oldRequest = error.config;
                            oldRequest.headers.Authorization = `Bearer ${newToken}`;

                            return this.instance(oldRequest);
                        }
                    } catch (refreshError) {
                        console.error("Failed to refresh access token:", refreshError);
                    }
                } else {
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

    get(url, query = {}) {
        return this.instance.get(`${url}${toUrlParams(query)}`);
    }

    post(url, body) {
        return this.instance.post(url, body);
    }

    put(url, body) {
        return this.instance.put(url, body);
    }

    patch(url, body) {
        return this.instance.patch(url, body);
    }

    delete(url) {
        return this.instance.delete(url);
    }
}

export default APIRequest;
