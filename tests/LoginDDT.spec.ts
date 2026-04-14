import{expect, test} from '@playwright/test';
import{LoginPage} from '../pages/LoginPage';
import{HomePage} from '../pages/HomePage';
import {TestConfig} from '../test.config';
import { DataProvider } from '../utils/dataProvider';

// const jsonPath="data/logindata.json";
// const jsonData=DataProvider.getTestDataFromJson(jsonPath);

// for(const data of jsonData){

//     test(`Verify Login Test with JSON Data:${data.testName} @datadriven `,async({page})=>{
//         const config=new TestConfig();
//         await page.goto(config.appUrl);

//         const homePage=new HomePage(page);
//         await homePage.clickMyAccount();
//         await homePage.clickLogin();

//         const loginPage=new LoginPage(page);
//         await loginPage.enterEmail(config.email);
//         await loginPage.enterPassword(config.password);
//         await loginPage.clickLoginButton();

//         if(data.expected.toLowerCase()==='success'){
//             expect(loginPage.msg).toBeTruthy();
//         }else{
//             const errorMsg="Warning: No match for E-Mail Address and/or Password.";
//             expect(errorMsg).toContain("Warning: No match for E-Mail Address and/or Password.");
//         }
//     })
// }

const csvPath="data/logindata.csv";
const csvData=DataProvider.getTestDataFromCSV(csvPath);

for(const data of csvData){

    test(`Verify Login Test with CSV Data:${data.testName} @datadriven `,async({page})=>{
        const config=new TestConfig();
        await page.goto(config.appUrl);

        const homePage=new HomePage(page);
        await homePage.clickMyAccount();
        await homePage.clickLogin();

        const loginPage=new LoginPage(page);
        await loginPage.enterEmail(config.email);
        await loginPage.enterPassword(config.password);
        await loginPage.clickLoginButton();

        if(data.expected.toLowerCase()==='success'){
            expect(loginPage.msg).toBeTruthy();
        }else{
            const errorMsg="Warning: No match for E-Mail Address and/or Password.";
            expect(errorMsg).toContain("Warning: No match for E-Mail Address and/or Password.");
        }
    })
}


