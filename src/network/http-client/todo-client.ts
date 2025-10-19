import constructClient from '@/network/http-client/axios';
import type { ClientConfig } from './client-config';

const config: ClientConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com'
};

const userClient = constructClient(config);

export default userClient;
