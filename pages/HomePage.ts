import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly lnkMyAccount: Locator;
  readonly lnkRegister: Locator;
  readonly lnkLogin:Locator;
  readonly inputSearch:Locator;
  readonly btnSearch:Locator;

  //constructor
  constructor(page: Page) {
    this.page = page;
    this.lnkMyAccount = page.locator("a[title='My Account']");
    this.lnkRegister=page.getByText("Register");
    this.lnkLogin=page.getByRole('link', { name: 'Login' }).first();
    this.inputSearch=page.locator("input[placeholder='Search']");
    this.btnSearch=page.locator("button[type='button']").nth(3);
  }

  async clickMyAccount(){
    await this.lnkMyAccount.click();
  }

  async clickRegister(){
    await this.lnkRegister.click();
  }

  async clickLogin(){
    await this.lnkLogin.click();
  }

  async enterKeyword(data:string){
    await this.inputSearch.fill(data);
  }

  async clickSearch(){
    await this.btnSearch.click();
  }
}
