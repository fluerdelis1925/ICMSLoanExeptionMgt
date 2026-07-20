
import { test, expect } from '@playwright/test';
import { TestConfig } from '../test.config'
import { LoginPage } from '../Pages/LoginIcms';
import { LoanBookingPage } from '../Pages/LoanBookingModule';
import { RandomDataUtil } from '../utils/RandomGenerator'
import { Approval } from '../Pages/Approval';
import { readCSV } from '../Pages/CsvReader';

const records = readCSV("testdata/Lovs.csv").filter(r => r.Industry?.trim());;

let config = new TestConfig();
let loginPages: LoginPage;
let loginPages1: LoginPage;
let LoanBookingPages: LoanBookingPage;
let RandomDataUtils: RandomDataUtil;
let Approvals: Approval;


test.beforeEach('', async ({ page }) => {
  config = new TestConfig();
  await page.goto(config.appUrl);

  loginPages = new LoginPage(page);
  loginPages1 = new LoginPage(page);
  LoanBookingPages = new LoanBookingPage(page);
  config = new TestConfig();
  RandomDataUtils = new RandomDataUtil();
  Approvals = new Approval(page);

})





// for (const data of records) {

//   test(`Cif Booking  - ${data.Industry}`, async ({ page }) => {
//     console.log(data);
//     await loginPages.loginICMS(config.email, config.password);
//     await LoanBookingPages.goToCIFBooking();
//     await LoanBookingPages.BasicInformations();
//     await LoanBookingPages.Detailformations(data.Industry);
//       })
// }

    // await page.waitForTimeout(1000);
//     // await page.getByText('Hello, Daniel').click();
//     // await page.getByText('Logout').click();


//     //  await page.context().clearCookies();

//     //  await page.goto(config.appUrl);
//     // await loginPages1.loginICMS("checker2", "checker2");
//     // await Approvals.ToapprovalModule();
//     // await Approvals.ToApprovalList();
//     // await Approvals.approvePending("daniel", "Pending review", "2026-07-17");;
//     // await page.getByText('Hello, checker2').click();
//     // await page.getByText('Logout').click();
  

 test("Approval", async ({page}) => {
        await page.goto(config.appUrl);
        await loginPages.loginICMS("checker2", "checker2");
        await Approvals.ToapprovalModule();
        await Approvals.ToApprovalList();
        await Approvals.approvePending("Pending review");;

 })