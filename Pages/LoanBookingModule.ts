import{Page, Locator, expect} from '@playwright/test'
import  {RandomDataUtil} from '../utils/RandomGenerator';

export class LoanBookingPage
{
   private readonly page:Page;
   private readonly CIFModule:Locator;
   private readonly CIFBooking:Locator;
   private readonly BasicInformation:Locator;
  




   constructor(page:Page)
   {
     this.page = page;
     this.CIFModule = this.page.locator('div').filter({ hasText: /^CIF Module$/ });
     this.CIFBooking = this.page.getByRole('menuitem', {name: 'CIF Booking'});
     this.BasicInformation = this.page.locator("#BasicInformation").getByText("Basic Information");
    
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

}