import{Locator,Page} from '@playwright/test';

export class LogoutPage{
    readonly page:Page;
    readonly lnkLogout:Locator;
    readonly btnContinue:Locator;
    readonly msg:Locator;

    constructor(page:Page){
        this.page=page;
        this.lnkLogout=page.getByRole('link', { name: 'Logout'}).first();
        this.btnContinue=page.getByRole('link', { name: 'Continue' });
        this.msg=page.getByRole('heading', { name: 'Featured' });
    }

    async clickLogout(){
        await this.lnkLogout.click();
    }
    async clickContinue(){
        await this.btnContinue.click();
    }
    async verifyFeatureTextMsg(){
        return await this.msg.textContent();
    }
}