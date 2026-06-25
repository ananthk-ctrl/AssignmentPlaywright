Autocomplete Form Automation Assignment
Overview

This project contains UI and API automation test scripts developed using Playwright with TypeScript for the Autocomplete Form application.

The framework follows the Page Object Model (POM) design pattern for UI automation and uses Playwright's built-in API testing capabilities for backend validation.

Technology Stack: 
Playwright
TypeScript
Node.js
Page Object Model (POM)

Prerequisites
Ensure the following are installed:
Node.js (v18 or higher)
npm
Replace the baseurl in config file with actual working url

Installation & setup :
git clone <repository-url>
cd <project-folder>
npm install
npx playwright install@latest
command for ui : npx playwright test ui/tests/autoComplete.spec.ts
command for api : npx playwright test tests/api/tests/autocomplete-api.spec.ts