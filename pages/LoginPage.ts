import{expect, Locator, Page} from '@playwright/test';

export class LoginPage{
    readonly page:Page;
    readonly inputEmail:Locator;
    readonly inputPassword: Locator;
    readonly btnLogin:Locator;
    readonly msg:Locator;

    constructor(page:Page){
        this.page=page;
        this.inputEmail=page.getByPlaceholder("E-Mail Address");
        this.inputPassword=page.getByPlaceholder("Password");
        this.btnLogin=page.locator("input[value='Login']");
        this.msg=page.getByRole('heading', { name: 'My Account', level: 2 });
    }

     async enterEmail(email:string){
        await this.inputEmail.fill(email);
     }
     async enterPassword(password:string){
        await this.inputPassword.fill(password);
    }
    async clickLoginButton(){
        await this.btnLogin.click();
    }
    async verifyMyAccountMsg(){
        return await this.msg.textContent();
    }
}