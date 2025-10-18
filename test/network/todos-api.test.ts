import { describe, it, expect, vi } from 'vitest';
import { TodosApi } from '@/network/example/todos-api';
import { HttpClient, ResponseWrapper } from '@/network/types';

describe('TodosApi', () => {
  it('should call client.get for list and get', async () => {
    const mockClient = {
      get: vi.fn(
        async (url: string) =>
          ({
            status: 200,
            data: url.includes('/todos/')
              ? { id: 1, title: 'a', completed: false }
              : [{ id: 1, title: 'a', completed: false }],
            headers: {},
          }) as ResponseWrapper<any>,
      ),
      post: vi.fn(async () => ({
        status: 201,
        data: { id: 2, title: 'b', completed: false },
        headers: {},
      })),
    } as unknown as HttpClient;

    const api = new TodosApi(mockClient as HttpClient);
    const list = await api.list();
    expect((mockClient.get as any).mock.calls.length).toBe(1);
    expect(Array.isArray(list.data)).toBe(true);

    const item = await api.get(1);
    expect((mockClient.get as any).mock.calls.length).toBe(2);
    expect(item.data.id).toBe(1);

    const created = await api.create({ title: 'b', completed: false });
    expect((mockClient.post as any).mock.calls.length).toBe(1);
    expect(created.status).toBe(201);
  });
});
