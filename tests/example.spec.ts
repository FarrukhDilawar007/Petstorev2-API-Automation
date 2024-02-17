const { test, expect } = require('@playwright/test');

test('verify response code for GET request to inventory endpoint', async ({ page }) => {
    // Send a GET request to the API endpoint
    const response = await page.goto('https://petstore.swagger.io/v2/store/inventory', {
        method: 'GET',
        headers: {
            'accept': 'application/json'
        }
    });

    // Assert the response code is 200 (OK)
    expect(response.status()).toBe(200);
});
