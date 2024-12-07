import { test, expect } from '@playwright/test';
import { config } from '../../src/config/testConfig';
import { apiClient } from '../../src/utils/apiClient';
import { generatePetData } from '../../src/utils/testData';
import { validatePetResponse } from '../../src/utils/validateResponses'


test.describe("Add a new Pet", () => {

    test('Add a new pet', async ({ request }) => {
        const requestBody = generatePetData(Date.now());
        console.log("Request Body: " + requestBody);
        const response = await apiClient.post(request, `${config.baseURL}/pet`, requestBody);
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        console.log("Response Body: " + responseBody);
        validatePetResponse(responseBody)
        // Validate the pet details match the request data
        expect(responseBody.id).toBe(requestBody.id);
        expect(responseBody.name).toBe(requestBody.name);
        expect(responseBody.status).toBe(requestBody.status);
    });
})

