import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { RandomDataUtil } from "../utils/randomDataGenerator";
import { TestConfig } from "../test.config";

let registerPage: RegisterPage;
let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  const config = new TestConfig();
  await page.goto(config.appUrl);
  homePage = new HomePage(page);
  registerPage = new RegisterPage(page);
});

test.afterEach(async ({ page }) => {
  await page.waitForTimeout(3000);
  await page.close();
});

test("Verify Account Registration @master,@sanity,@regression", async () => {
  await homePage.clickMyAccount();
  await homePage.clickRegister();

  await registerPage.enterFirstname(RandomDataUtil.getFirstname());
  await registerPage.enterLastname(RandomDataUtil.getLastname());
  await registerPage.enterEmail(RandomDataUtil.getEmail());
  await registerPage.enterTelephone(RandomDataUtil.getPhoneNumber());

  const password = RandomDataUtil.getPassworx();
  await registerPage.enterPassword(password);
  await registerPage.enterConfirmPassword(password);

  await registerPage.clickOnRadiButton();
  await registerPage.clcikOnPrivacy();
  await registerPage.clickOnContinue();

  await expect(registerPage.msgConfirmation).toBeVisible();
  await expect(registerPage.msgConfirmation).toContainText("Your Account Has Been Created!");
});
