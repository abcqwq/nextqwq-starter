import { queryOptions } from '@tanstack/react-query';
import client from '@/network/http-client/todo-client';

const query = async () => {
  const response = await client.get('/todos');
  return response.data;
};

export const getTodosQueryOption = () => {
  return queryOptions({
    queryKey: ['todos'],
    queryFn: query
  });
};
