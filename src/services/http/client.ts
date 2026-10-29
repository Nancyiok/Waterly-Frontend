import axios from "axios";
import {setupInterceptors} from "./interceptors";

export const createClient = (withCookie: boolean = false) => {
    const client = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        headers: {Accept: "application/json"},
        withCredentials: withCookie,
    });

    setupInterceptors(client);
    return client;
};

export const apiClientWithoutCookie = createClient();

export const apiClientWithCookie = createClient(true);