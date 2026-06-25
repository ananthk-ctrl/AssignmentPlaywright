import { test, expect } from '@playwright/test';
import testData from '../data/apiTestData.json';

const BASE_URL =
  `https://test.com/api/autocomplete-response/${testData.recordId}`;

test.describe('Autocomplete API Validation', () => {

    test('Validate FR-05 data contract and response schema', async ({ request }) => {

        const response = await request.get(BASE_URL);

        expect(response.status()).toBe(200);

        const body = await response.json();

        // Schema Validation
        expect(body).toHaveProperty('account_id');
        expect(body).toHaveProperty('account_email');
        expect(body).toHaveProperty('start_date');
        expect(body).toHaveProperty('end_date');
        expect(body).toHaveProperty('locale');
        expect(body).toHaveProperty('text');
        expect(body).toHaveProperty('suggestion_list');
        expect(body).toHaveProperty('completed');

        // Data Type Validation
        expect(typeof body.account_id).toBe('string');
        expect(typeof body.account_email).toBe('string');
        expect(typeof body.start_date).toBe('string');
        expect(typeof body.end_date).toBe('string');
        expect(typeof body.locale).toBe('string');
        expect(typeof body.text).toBe('string');
        expect(typeof body.suggestion_list).toBe('string');
        expect(typeof body.completed).toBe('boolean');

        // Email Validation
        expect(body.account_email)
            .toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

        // Timestamp Validation
        const isoRegex =
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|[+-]\d{2}:\d{2})$/;

        expect(body.start_date).toMatch(isoRegex);
        expect(body.end_date).toMatch(isoRegex);

        // Locale Validation
        const localeRegex =
            new RegExp(testData.expectedLocalePattern);

        expect(body.locale).toMatch(localeRegex);

        // Text Validation
        expect(body.text)
            .toBe(testData.selectedText);

        // Suggestion List Validation
        const suggestions = body.suggestion_list
            .split(',')
            .map((s: string) => s.trim());

        suggestions.forEach((suggestion: string) => {

            expect(
                suggestion.toLowerCase()
            ).toContain(
                body.text.toLowerCase()
            );
        });

        // Completed Validation
        expect(body.completed).toBe(true);
    });


    test('Negative Validation - Invalid response should fail contract checks', async ({ request }) => {

        const response = await request.get(
            'https://test.com/api/mock-invalid-response'
        );

        const body = await response.json();

        // Missing locale
        expect(body).not.toHaveProperty('locale');

        // completed should not be string
        expect(typeof body.completed)
            .not.toBe('string');

        // Invalid locale format
        if (body.locale) {
            expect(body.locale)
                .not.toMatch(/^[a-z]{2}-[A-Z]{2}$/);
        }

        // Invalid timestamp
        if (body.start_date) {
            expect(body.start_date)
                .not.toMatch(
                    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|[+-]\d{2}:\d{2})$/
                );
        }
    });

});