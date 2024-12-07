import { test, expect } from '@playwright/test';

test('Create a new user', async ({ request }) => {
  const user = {
    id: 1,
    username: 'testuser',
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    password: 'password123',
    phone: '1234567890',
  };
  const response = await request.post('/user', { data: user });
  expect(response.status()).toBe(200);
});
