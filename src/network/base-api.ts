import { HttpClient } from './types';

export abstract class BaseApi {
  protected client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  setHost(url: string) {
    this.client.setBaseURL(url);
  }

  setTimeout(ms: number) {
    this.client.setTimeout(ms);
  }

  setDefaultHeaders(headers: Record<string, string>) {
    this.client.setDefaultHeaders(headers);
  }
}
