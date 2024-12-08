import { test, expect } from '@playwright/test';
import { config } from '../../src/config/testConfig';
import { apiClient } from '../../src/utils/apiClient';
import { generatePetData } from '../../src/utils/testData'
import { validatePetResponse } from '../../src/utils/validateResponses'

test.describe("Get the Pet Details", () => {
    test.describe.configure({ mode: 'parallel' });
    var petId = 0;
    test.beforeEach('Add new pet', async ({ request }) => {
        const petData = generatePetData(Date.now());
        const response = await apiClient.post(request, `${config.baseURL}/pet`, petData);
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        console.log("Pet Details:", JSON.stringify(responseBody, null, 2));
        petId = responseBody.id;

    })

    test('Update the Pet Name', async ({ request }) => {
        const response = await apiClient.put(request, `${config.baseURL}/pet`, {
            id: petId,
            name: "Candy"
        });
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        console.log('Updated Pet Details:' + JSON.stringify(responseBody, null, 2));
        //validatePetResponse(responseBody);

        expect(responseBody.id).toBe(petId);
        expect(responseBody.name).toBe('Candy');
    });

    test('Update the Pet Status - Pending', async ({ request }) => {
        const response = await apiClient.put(request, `${config.baseURL}/pet`, {
            id: petId,
            status: "pending"
        });
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        console.log('Updated Pet Details:' + JSON.stringify(responseBody, null, 2));
        //validatePetResponse(responseBody);

        expect(responseBody.id).toBe(petId);
        expect(responseBody.status).toBe('pending');
    });

    test('Update the Pet Status - Sold', async ({ request }) => {
        const response = await apiClient.put(request, `${config.baseURL}/pet`, {
            id: petId,
            status: "sold"
        });
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        console.log('Updated Pet Details:' + JSON.stringify(responseBody, null, 2));
        //validatePetResponse(responseBody);

        expect(responseBody.id).toBe(petId);
        expect(responseBody.status).toBe('sold');
    });
});

