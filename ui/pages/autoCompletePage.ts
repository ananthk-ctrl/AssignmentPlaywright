import { Page, Locator } from '@playwright/test';

export class AutocompletePage {
  readonly page: Page;
  readonly inputField: Locator;
  readonly nextButton: Locator;
  readonly successMessage: Locator;
  readonly errorMessage: Locator;
  readonly suggestions: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputField = page.locator('#input-field');
    this.nextButton = page.locator('#next-button');
    this.successMessage = page.locator('.success-container');
    this.errorMessage = page.locator('.error-message');
    this.suggestions = page.locator('.suggestions li');
  }

  async navigateToBaseUrl() {
    await this.page.goto('/');
    console.log('Navigated to the autocomplete form page');
  }

  async enterText(text: string) {
    await this.inputField.fill(text);
    console.log(`Text entered into input field: ${text}`);
  }

  async selectSuggestion(text: string) {
    await this.page.locator('.suggestions li', { hasText: text }).click();
    console.log(`Suggestion selected from json file: ${text}`);
  }

  async getSuggestions() {
    return await this.suggestions.allTextContents();
  }

  async pressEscape() {
    await this.page.keyboard.press('Escape');
    console.log('Escape key pressed from keyboard');
  }

  async pressEnter() {
    await this.page.keyboard.press('Enter');
    console.log('Enter key pressed from keyboard');
  }
}
