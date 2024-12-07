import { test, expect } from '@playwright/test';

test('Place an order', async ({ request }) => {
  const order = {
    id: 1,
    petId: 123,
    quantity: 1,
    status: 'placed',
  };
  const response = await request.post('/store/order', { data: order });
  expect(response.status()).toBe(200);
});
