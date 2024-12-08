import { test, expect } from '@playwright/test';
import { config } from '../../src/config/testConfig';
import { apiClient } from '../../src/utils/apiClient';
import { generatePetData } from '../../src/utils/testData'
import { validatePetResponse } from '../../src/utils/validateResponses'

test.describe("Get the Pet Details", () => {
    var petId = 0;
    test.beforeAll('Add new pet', async ({ request }) => {
        const petData = generatePetData(Date.now());
        const response = await apiClient.post(request, `${config.baseURL}/pet`, petData);
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        petId = responseBody.id;

    })

    test('Get the Pet Detail By the PetId', async ({ request }) => {
        const response = await apiClient.get(request, `${config.baseURL}/pet/` + petId);
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        console.log("Pet Details:", JSON.stringify(responseBody, null, 2));
        validatePetResponse(responseBody);
    });

})

