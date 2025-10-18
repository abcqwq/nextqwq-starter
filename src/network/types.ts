export type RequestMethod =
  | "get"
  | "post"
  | "put"
  | "patch"
  | "delete"
  | "head";

export interface RequestConfig {
  url: string;
  method?: RequestMethod;
  params?: Record<string, unknown>;
  data?: unknown;
  headers?: Record<string, string>;
  timeout?: number;
}

export interface ResponseWrapper<T = unknown> {
  status: number;
  data: T;
  headers: Record<string, string>;
}

export type SuccessHandler = <T = unknown>(
  response: ResponseWrapper<T>
) => ResponseWrapper<T> | Promise<ResponseWrapper<T>>;
export type ErrorHandler = (error: unknown) => unknown;

export interface HttpClient {
  setBaseURL(url: string): void;
  setTimeout(ms: number): void;
  setDefaultHeaders(headers: Record<string, string>): void;

  onSuccess(handler: SuccessHandler): void;
  onError(handler: ErrorHandler): void;

  request<T = unknown>(config: RequestConfig): Promise<ResponseWrapper<T>>;
  get<T = unknown>(
    url: string,
    params?: Record<string, unknown>,
    headers?: Record<string, string>
  ): Promise<ResponseWrapper<T>>;
  post<T = unknown>(
    url: string,
    data?: unknown,
    headers?: Record<string, string>
  ): Promise<ResponseWrapper<T>>;
  put<T = unknown>(
    url: string,
    data?: unknown,
    headers?: Record<string, string>
  ): Promise<ResponseWrapper<T>>;
  del<T = unknown>(
    url: string,
    data?: unknown,
    headers?: Record<string, string>
  ): Promise<ResponseWrapper<T>>;
}
