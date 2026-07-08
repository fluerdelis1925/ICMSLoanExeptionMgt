import{Page, Locator, expect} from '@playwright/test'
import  {RandomDataUtil} from '../utils/RandomGenerator';

export class LoanBookingPage
{
   private readonly page:Page;
   private readonly CIFModule:Locator;
   private readonly CIFBooking:Locator;
   private readonly BasicInformation:Locator;
   private readonly  giverName:Locator;
   private readonly  userName:Locator;
   private readonly  sex:Locator;

   constructor(page:Page)
   {
     this.page = page;
     this.CIFModule = this.page.locator('div').filter({ hasText: /^CIF Module$/ });
     this.CIFBooking = this.page.getByRole('menuitem', {name: 'CIF Booking'});
     this.BasicInformation = this.page.locator("#BasicInformation").getByText("Basic Information");
     this.giverName = this.page.locator("#givenName")
     this.userName = this.page.locator("##surname")
     this.sex = this.page.locator("#sex")
   }

   async goToCIFBooking():Promise<void>
   {
       await this.CIFModule.click();
       await this.CIFBooking.click();
       await this.BasicInformation.waitFor({state: 'visible'});

   }
  async BasicInformations():Promise<void>
  {
    await this.page.locator("#clientType").click();
    await this.page.getByText("Personal").click();
    await this.page.locator("#countryLoc").click();
    await this.page.getByText("Philippines").click();
  }


  async Detailformations(givenNames:string, userName:string, sex:string) :Promise<void>
  {
    this.giverName.fill(givenNames);
    this.userName.fill(userName);
    this.sex.fill(sex);
  }
}