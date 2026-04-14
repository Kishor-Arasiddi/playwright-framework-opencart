import{Locator, Page} from '@playwright/test';

export class RegisterPage{
    readonly page:Page;
    readonly inputFirstName:Locator;
    readonly inputLastName:Locator;
    readonly inputEmail:Locator;
    readonly inputTelephone:Locator;
    readonly inputPassword:Locator;
    readonly inputPasswordConfirm:Locator;
    readonly radioYes:Locator;
    readonly checkboxPrivacy:Locator;
    readonly btnContinue:Locator;
    readonly msgConfirmation:Locator;

    constructor(page:Page){
        this.page=page;
        this.inputFirstName=page.locator("input[id='input-firstname']");
        this.inputLastName=page.locator("input[id='input-lastname']");
        this.inputEmail=page.locator("input[id='input-email']");
        this.inputTelephone=page.locator("input[id='input-telephone']");
        this.inputPassword=page.locator("input[id='input-password']");
        this.inputPasswordConfirm=page.locator("input[id='input-confirm']");
        this.radioYes=page.locator("input[name='newsletter'][value='1']");
        this.checkboxPrivacy=page.locator("input[name='agree']");
        this.btnContinue=page.locator("input[value='Continue']");
        this.msgConfirmation=page.getByRole('heading', { name: 'Your Account Has Been Created!' });
    }

    async enterFirstname(firstname:string){
        await this.inputFirstName.fill(firstname);
    }

     async enterLastname(lastname:string){
        await this.inputLastName.fill(lastname);
    }

     async enterEmail(email:string){
        await this.inputEmail.fill(email);
    }

     async enterTelephone(telephone:string){
        await this.inputTelephone.fill(telephone);
    }

     async enterPassword(password:string){
        await this.inputPassword.fill(password);
    }
     async enterConfirmPassword(cPassword:string){
        await this.inputPasswordConfirm.fill(cPassword);
    }

     async clickOnRadiButton(){
        await this.radioYes.check();
    }

     async clcikOnPrivacy(){
        await this.checkboxPrivacy.check();
     }

     async clickOnContinue(){
        await this.btnContinue.click();
    }

    async verifyConfirmationMsg(){
        return await this.msgConfirmation.textContent();
    }
}