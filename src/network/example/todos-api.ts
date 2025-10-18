import { BaseApi } from '@/network/base-api';
import type { ResponseWrapper } from '@/network/types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export class TodosApi extends BaseApi {
  async list(): Promise<ResponseWrapper<Todo[]>> {
    return this.client.get<Todo[]>('/todos');
  }

  async get(id: number): Promise<ResponseWrapper<Todo>> {
    return this.client.get<Todo>(`/todos/${id}`);
  }

  async create(payload: Omit<Todo, 'id'>): Promise<ResponseWrapper<Todo>> {
    return this.client.post<Todo>('/todos', payload);
  }
}
