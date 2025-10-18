import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios';
import axios from 'axios';
import type {
  ErrorHandler,
  HttpClient,
  RequestConfig,
  ResponseWrapper,
  SuccessHandler
} from '@/network/types';

export class AxiosHttpClient implements HttpClient {
  private instance: AxiosInstance;
  private successHandler?: SuccessHandler;
  private errorHandler?: ErrorHandler;

  constructor(baseURL?: string, timeout = 10000) {
    this.instance = axios.create({ baseURL, timeout });

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        // call our handler for app-level normalization/logging but return the original response
        void this.handleSuccess(res);
        return res;
      },
      (err: unknown) => this.handleError(err)
    );
  }

  setBaseURL(url: string) {
    this.instance.defaults.baseURL = url;
  }

  setTimeout(ms: number) {
    this.instance.defaults.timeout = ms;
  }

  setDefaultHeaders(headers: Record<string, string>) {
    Object.assign(this.instance.defaults.headers.common, headers);
  }

  onSuccess(handler: SuccessHandler) {
    this.successHandler = handler;
  }

  onError(handler: ErrorHandler) {
    this.errorHandler = handler;
  }

  private normalizeResponse<T = unknown>(
    res: AxiosResponse<T>
  ): ResponseWrapper<T> {
    const headers: Record<string, string> = {};
    const rawHeaders: Record<string, unknown> = (res.headers ?? {}) as Record<
      string,
      unknown
    >;
    Object.keys(rawHeaders).forEach((k: string) => {
      const value = rawHeaders[k];
      if (value == null) {
        headers[k] = '';
      } else if (Array.isArray(value)) {
        headers[k] = value.map(String).join(', ');
      } else {
        headers[k] = String(value);
      }
    });
    return {
      status: res.status,
      data: res.data as T,
      headers
    };
  }

  private handleSuccess = async <T = unknown>(
    res: AxiosResponse<T>
  ): Promise<ResponseWrapper<T>> => {
    const wrapped = this.normalizeResponse(res) as ResponseWrapper<T>;
    if (this.successHandler)
      return this.successHandler(wrapped) as Promise<ResponseWrapper<T>>;
    return wrapped;
  };

  private handleError = (err: unknown) => {
    if (this.errorHandler) return this.errorHandler(err);
    // default behavior: rethrow with normalized shape
    const axiosErr = err as AxiosError<unknown>;
    if (axiosErr?.response) {
      const wrapped = this.normalizeResponse(
        axiosErr.response as AxiosResponse
      );
      return Promise.reject({
        message: axiosErr.message,
        response: wrapped
      });
    }
    return Promise.reject(err);
  };

  async request<T = unknown>(
    config: RequestConfig
  ): Promise<ResponseWrapper<T>> {
    const axiosConfig: AxiosRequestConfig = {
      url: config.url,
      method: config.method,
      params: config.params,
      data: config.data,
      headers: config.headers,
      timeout: config.timeout
    };

    const res = await this.instance.request<T>(axiosConfig);
    return this.normalizeResponse(res as AxiosResponse<T>);
  }

  async get<T = unknown>(
    url: string,
    params?: Record<string, unknown>,
    headers?: Record<string, string>
  ): Promise<ResponseWrapper<T>> {
    const res = await this.instance.get<T>(url, { params, headers });
    return this.normalizeResponse(res as AxiosResponse<T>);
  }

  async post<T = unknown>(
    url: string,
    data?: unknown,
    headers?: Record<string, string>
  ): Promise<ResponseWrapper<T>> {
    const res = await this.instance.post<T>(url, data, { headers });
    return this.normalizeResponse(res as AxiosResponse<T>);
  }

  async put<T = unknown>(
    url: string,
    data?: unknown,
    headers?: Record<string, string>
  ): Promise<ResponseWrapper<T>> {
    const res = await this.instance.put<T>(url, data, { headers });
    return this.normalizeResponse(res as AxiosResponse<T>);
  }

  async del<T = unknown>(
    url: string,
    data?: unknown,
    headers?: Record<string, string>
  ): Promise<ResponseWrapper<T>> {
    const res = await this.instance.delete<T>(url, { data, headers });
    return this.normalizeResponse(res as AxiosResponse<T>);
  }
}
