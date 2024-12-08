import { test, expect } from '@playwright/test';
import { config } from '../../src/config/testConfig';
import { apiClient } from '../../src/utils/apiClient';
import { generatePetData } from '../../src/utils/testData';
import { validatePetResponse } from '../../src/utils/validateResponses'


test.describe("Add a new Pet", () => {

    test('Add a new pet', async ({ request }) => {
        const requestBody = generatePetData(Date.now());
        console.log("Request Body: " + JSON.stringify(requestBody, null, 2));
        const response = await apiClient.post(request, `${config.baseURL}/pet`, requestBody);
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        console.log("Response Body: " + JSON.stringify(responseBody, null, 2));
        validatePetResponse(responseBody)
        // Validate the pet details match the request data
        expect(responseBody.id).toBe(requestBody.id);
        expect(responseBody.name).toBe(requestBody.name);
        expect(responseBody.status).toBe(requestBody.status);
    });
})

