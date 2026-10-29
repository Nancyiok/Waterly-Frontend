import type { AxiosInstance } from "axios";
import { setupRequestInterceptor } from "./request";
import { setupResponseInterceptor } from "./response/response";

export const setupInterceptors = (client: AxiosInstance) => {
    setupRequestInterceptor(client);
    setupResponseInterceptor(client);
};