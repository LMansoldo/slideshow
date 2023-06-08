import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { ApiResponse } from './types'

enum ApiOperations {
	GET = 'get',
	POST = 'post',
	PUT = 'put',
	DELETE = 'delete'
}
export class ServicesApi {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  public async request<T>(
    method: ApiOperations,
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.axiosInstance.request<T>({
        method,
        url,
        data,
        ...config,
      });

      const apiResponse: ApiResponse<T> = {
        success: true,
        data: response.data,
      };

      return apiResponse;
    } catch (error) {
      const statusCode = error?.response?.status;
      const message =
        error?.response?.data?.error ||
        `Error: ${method} in ${url} - status: ${statusCode}`;

      const apiResponse: ApiResponse<T> = {
        success: false,
        error: message,
      };

      return apiResponse;
    }
  }

  // Métodos específicos para cada operação da API
  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(ApiOperations.GET, url, undefined, config);
  }

  public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(ApiOperations.POST, url, data, config);
  }

  public async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(ApiOperations.PUT, url, data, config);
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(ApiOperations.DELETE, url, undefined, config);
  }
}