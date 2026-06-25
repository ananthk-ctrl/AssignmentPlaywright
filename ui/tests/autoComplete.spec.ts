import { test, expect } from '@playwright/test';
import { AutocompletePage } from '../pages/autoCompletePage';
import testData from '../data/autocompleteData.json';

test('Autocomplete Form End-to-End Validation', async ({ page }) => {
  const form = new AutocompletePage(page);
  await form.navigateToBaseUrl();
  await page.keyboard.press('Tab');
  await expect(form.inputField).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(form.nextButton).toBeFocused();
  await form.inputField.focus();
  await form.enterText(testData.validInput);
  const suggestions = await form.getSuggestions();
  for (const item of testData.expectedSuggestions) {
    expect(suggestions).toContain(item);
  }
  await form.pressEscape();
  await form.enterText(testData.validInput);
  await form.selectSuggestion(testData.selectedSuggestion);
  await expect(form.inputField).toHaveValue(testData.selectedSuggestion);
  await form.pressEnter();
  await expect(form.successMessage).toBeVisible();
});
