import{test,expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import {LoginPage} from '../pages/LoginPage';
import {LogoutPage} from '../pages/LogoutPage';
import { TestConfig } from '../test.config';

test("Verify Login Scenario",{tag:["@master","@sanity","@regression"]},async({page})=>{
    const config=new TestConfig();
    await page.goto(config.appUrl);

    const homePage=new HomePage(page);
    homePage.clickMyAccount();
    homePage.clickLogin();

    const loginPage=new LoginPage(page);
    await loginPage.enterEmail(config.email);
    await loginPage.enterPassword(config.password);
    await loginPage.clickLoginButton();
    await expect(loginPage.msg).toBeVisible();
    await expect(loginPage.msg).toContainText("My Account");

    //To generate allure reports
    //npx allure generate ./allure-results -o ./allure-report --clean

    //To open allure reports
    //npx allure open ./allure-report
});