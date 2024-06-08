import { test, expect } from '@playwright/test';

test('verify response code for GET request to inventory endpoint', async ({ request }) => {
  // Send a GET request to the API endpoint with expected headers
  const response = await request.get('https://petstore.swagger.io/v2/store/inventory', {
    headers: {
      'accept': 'application/json',
    },
  });

  // Assert the response code is 200 (OK)
  expect(response.status()).toBe(200);
});
