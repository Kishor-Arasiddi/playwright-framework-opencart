# Playwright Test Automation Framework for OpenCart

This repository contains a robust, scalable, and fully structured End-to-End (E2E) UI testing framework built with 
**Playwright**, **TypeScript**, and the **Page Object Model (POM)** design pattern. 
It is specifically tailored for testing OpenCart or similar e-commerce web applications.

## Key Features

* **Playwright Engine**: Fast, reliable execution across all modern browsers (Chromium, Firefox, WebKit).
* **Page Object Model (POM)**: Highly maintainable code structure separating UI locators and interactions from test logic.
* **Allure Reporting**: Integrated rich, visual, and detailed test execution reports.
* **CI/CD Ready**: Fully configured GitHub Actions workflows for continuous integration testing.
* **Data-Driven**: Externalized test data handling for scaling test coverage.
* **API Testing Integration**: Includes dedicated notes and structure for combining API and UI test strategies.

## Tech Stack

* **Automation Tool:** [Playwright](https://playwright.dev/)
* **Language:** TypeScript / JavaScript
* **Reporting:** [Allure Reports](https://allurereport.org/)
* **CI/CD:** GitHub Actions

## 📁 Project Structure
```text
📦 playwright-framework-opencart
 ┣ 📂 .github/workflows   # GitHub Actions pipelines for automated CI/CD runs
 ┣ 📂 API_TestingNotes    # Documentation and references for API Testing integration
 ┣ 📂 CI&GIT_Notes        # Helpful documentation on CI concepts and Git commands
 ┣ 📂 allure-report       # Generated interactive HTML test reports (Ignored in Git)
 ┣ 📂 allure-results      # Raw XML/JSON results used to generate Allure reports
 ┣ 📂 data                # Test data files (JSON/CSV) used for data-driven testing
 ┣ 📂 pages               # Page Object classes containing UI locators and methods
 ┣ 📂 tests               # Actual Playwright test scripts (*.spec.ts files)
 ┣ 📂 utils               # Helper methods, custom commands, and utility functions
 ┣ 📜 .gitignore          # Files and folders ignored by Git
 ┣ 📜 Framework-Step+By+Step.pdf # Comprehensive guide on building this framework
 ┣ 📜 package.json        # Project dependencies and npm scripts
 ┣ 📜 playwright.config.ts# Global Playwright configuration file
 ┣ 📜 test.config.ts      # Custom environmental configurations
 ┗ 📜 setup.sh            # Shell script for fast environment initialization
```
## Prerequisites

Before you begin, ensure you have the following installed on your machine:
1. Node.js (v16 or higher recommended)
2. npm (comes with Node.js)
3. Git

## Installation & Setup

1. Clone the repository:
```
git clone [https://github.com/Kishor-Arasiddi/playwright-framework-opencart.git](https://github.com/Kishor-Arasiddi/playwright-framework-opencart.git)
cd playwright-framework-opencart
```
2. Install project dependencies:
```
npm install
```
3. Install Playwright browsers:
```
npx playwright install
```

## Running Tests

You can execute tests using the following Playwright CLI commands:

**Run all tests in headless mode (default):**
```
npx playwright test
```

**Run tests in UI mode (interactive debugging):**
```
npx playwright test --ui
```
**Run tests with headed browser (visible execution):**
```
npx playwright test --headed
```
**Run a specific test file:**
```
npx playwright test tests/example.spec.ts
```

## Viewing Allure Reports

This framework is integrated with Allure for advanced test reporting.

**1. Generate the Allure report from results:**
```
npx allure generate allure-results --clean
```
**2. Open and serve the Allure HTML report:**
```
npx allure open allure-report
```

## CI/CD Pipeline

This project includes GitHub Actions workflows located in .github/workflows/.
The pipeline is designed to automatically trigger Playwright tests on:

```push``` to the ```master``` branch

```pull_request``` against the ```master``` branch

You can view the pipeline configuration to adjust environmental variables, scheduling, or browser matrices.




