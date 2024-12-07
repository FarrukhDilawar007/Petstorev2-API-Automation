
import { expect } from '@playwright/test';

export const validatePetResponse = (responseBody: any) => {
    expect(responseBody).toHaveProperty('id');
    expect(responseBody).toHaveProperty('name');
    expect(responseBody).toHaveProperty('photoUrls');
    expect(responseBody).toHaveProperty('tags');
    expect(responseBody).toHaveProperty('status');

    expect(Array.isArray(responseBody.photoUrls)).toBe(true);
    expect(Array.isArray(responseBody.tags)).toBe(true);

    expect(typeof responseBody.name).toBe('string');
    expect(typeof responseBody.status).toBe('string');
};