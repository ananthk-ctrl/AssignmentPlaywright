# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: autoComplete.spec.ts >> Autocomplete Form End-to-End Validation
- Location: tests\autoComplete.spec.ts:5:5

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://test.com/
Call log:
  - navigating to "https://test.com/", waiting until "load"

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class AutocompletePage {
  4  |   readonly page: Page;
  5  |   readonly inputField: Locator;
  6  |   readonly nextButton: Locator;
  7  |   readonly successMessage: Locator;
  8  |   readonly errorMessage: Locator;
  9  |   readonly suggestions: Locator;
  10 | 
  11 |   constructor(page: Page) {
  12 |     this.page = page;
  13 |     this.inputField = page.locator('#input-field');
  14 |     this.nextButton = page.locator('#next-button');
  15 |     this.successMessage = page.locator('.success-container');
  16 |     this.errorMessage = page.locator('.error-message');
  17 |     this.suggestions = page.locator('.suggestions li');
  18 |   }
  19 | 
  20 |   async navigate() {
> 21 |     await this.page.goto('./');
     |                     ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://test.com/
  22 |   }
  23 | 
  24 |   async enterText(text: string) {
  25 |     await this.inputField.fill(text);
  26 |   }
  27 | 
  28 |   async selectSuggestion(text: string) {
  29 |     await this.page.locator('.suggestions li', { hasText: text }).click();
  30 |   }
  31 | 
  32 |   async getSuggestions() {
  33 |     return await this.suggestions.allTextContents();
  34 |   }
  35 | 
  36 |   async pressEscape() {
  37 |     await this.page.keyboard.press('Escape');
  38 |   }
  39 | 
  40 |   async pressEnter() {
  41 |     await this.page.keyboard.press('Enter');
  42 |   }
  43 | }
  44 | 
```