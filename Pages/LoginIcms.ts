import{Page, Locator} from '@playwright/test'

export class LoginPage
{
   private readonly page:Page;
   private readonly userName:Locator;
   private readonly passWord:Locator;
   private readonly submitBtn:Locator;



   constructor(page:Page)
   {
     this.page = page;
     this.userName = this.page.locator("#userName");
     this.passWord = this.page.locator("#password");
     this.submitBtn = this.page.locator('button[type="submit"]');
   }

   async loginICMS(username:string, password:string):Promise<void>
   {
       await this.userName.fill(username);
       await this.submitBtn.click();
       await this.passWord.fill(password);
       await this.submitBtn.click();
   }

}