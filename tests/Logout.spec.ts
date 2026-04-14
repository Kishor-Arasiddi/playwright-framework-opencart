import { HomePage } from "../pages/HomePage";
import { TestConfig } from "../test.config";
import { LoginPage } from "../pages/LoginPage";
import {test,expect} from "playwright/test";
import { LogoutPage } from "../pages/LogoutPage";

let config:TestConfig;
let loginPage:LoginPage;
let homePage:HomePage;
let logoutPage:LogoutPage;

test.beforeEach(async ({page})=>{
    config=new TestConfig();
    await page.goto(config.appUrl);

    homePage=new HomePage(page);
    await homePage.clickMyAccount();
    await homePage.clickLogin();
    
    loginPage=new LoginPage(page);
    await loginPage.enterEmail(config.email);
    await loginPage.enterPassword(config.password);
    await loginPage.clickLoginButton();

    logoutPage=new LogoutPage(page);
})

test.afterEach(async ({page})=>{
    await page.close();
})

test("Verify the Logout functionality",{tag:["@sanity","@master","@regression"]},async()=>{
    await logoutPage.clickLogout();
    await logoutPage.clickContinue();
    await expect(logoutPage.msg).toBeVisible();
    await expect(logoutPage.msg).toContainText("Featured");
})