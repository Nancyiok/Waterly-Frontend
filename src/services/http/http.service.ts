import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { apiClientWithoutCookie, apiClientWithCookie } from "./client";

export interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T | null;
}

export interface PaginationMeta {
  total: number;
  limit: number;
  offset: number;
  hasNext: boolean;
}

export interface PaginatedApiResponse<T, M = unknown> {
  statusCode: number;
  message: string;
  data: T[];
  pagination: PaginationMeta;
  meta?: M;
}

class HttpService {
  private client: AxiosInstance;
  constructor(client: AxiosInstance) {
    this.client = client;
  }

  get<T>(url: string, config?: AxiosRequestConfig) {
    return this.client.get<ApiResponse<T>>(url, config).then((r) => r.data);
  }

  getPaginated<T, M = unknown>(url: string, config?: AxiosRequestConfig) {
    return this.client
      .get<PaginatedApiResponse<T, M>>(url, config)
      .then((res) => res.data);
  }

  post<T, P = unknown>(url: string, payload?: P, config?: AxiosRequestConfig) {
    return this.client
      .post<ApiResponse<T>>(url, payload, config)
      .then((res) => res.data);
  }

  put<T, P = unknown>(url: string, payload?: P, config?: AxiosRequestConfig) {
    return this.client
      .put<ApiResponse<T>>(url, payload, config)
      .then((res) => res.data);
  }

  delete<T>(url: string, config?: AxiosRequestConfig) {
    return this.client
      .delete<ApiResponse<T>>(url, config)
      .then((res) => res.data);
  }

  patch<T, P = unknown>(url: string, payload?: P, config?: AxiosRequestConfig) {
    return this.client
      .patch<ApiResponse<T>>(url, payload, config)
      .then((res) => res.data);
  }
}

export const httpService = new HttpService(apiClientWithoutCookie);
export const httpServiceWithCookie = new HttpService(apiClientWithCookie);

export default HttpService;
