import { APIRequestContext } from '@playwright/test';

export const apiClient = {
  
    async get(api: APIRequestContext, endpoint: string) {
    const response = await api.get(endpoint);
    return response;
  },

  async post(api: APIRequestContext, endpoint: string, data: object) {
    const response = await api.post(endpoint, { data });
    return response;
  },
};
