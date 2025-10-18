import { describe, it, expect, vi, beforeEach } from 'vitest';
import axios from 'axios';
import { AxiosHttpClient } from '@/network/axios-http-client';

vi.mock('axios');

describe('AxiosHttpClient', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should normalize response and return ResponseWrapper', async () => {
    const mockedAxios = axios as unknown as any;
    mockedAxios.create = vi.fn(() => ({
      defaults: { headers: { common: {} } },
      interceptors: { response: { use: vi.fn() } },
      request: vi.fn(async () => ({
        status: 200,
        data: { hello: 'world' },
        headers: { 'x-test': '1' },
      })),
      get: vi.fn(async () => ({
        status: 200,
        data: [1, 2, 3],
        headers: {},
      })),
      post: vi.fn(async () => ({
        status: 201,
        data: { id: 1 },
        headers: {},
      })),
      put: vi.fn(async () => ({
        status: 200,
        data: { ok: true },
        headers: {},
      })),
      delete: vi.fn(async () => ({
        status: 204,
        data: null,
        headers: {},
      })),
    }));

    const client = new AxiosHttpClient('http://example.test', 5000);

    const r = await client.request({ url: '/foo', method: 'get' });
    expect(r.status).toBe(200);
    expect(r.data).toEqual({ hello: 'world' });

    const g = await client.get('/list');
    expect(g.data).toEqual([1, 2, 3]);

    const p = await client.post('/items', { name: 'x' });
    expect(p.status).toBe(201);
  });
});
