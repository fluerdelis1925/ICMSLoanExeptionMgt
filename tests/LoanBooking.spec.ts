
import { test, expect} from '@playwright/test';
import {TestConfig} from '../test.config'
import { LoginPage } from '../Pages/LoginIcms';
import {LoanBookingPage} from '../Pages/LoanBookingModule';

let config = new TestConfig();
let loginPages: LoginPage;
let LoanBookingPages: LoanBookingPage;

test.beforeEach('', async({page})=>
{
 config = new TestConfig();
 await page.goto(config.appUrl);

 loginPages = new LoginPage(page);
 LoanBookingPages = new  LoanBookingPage(page);

})



test('Loan Booking', async({page})=>
    {
        await loginPages.loginICMS(config.email, config.password);
        await LoanBookingPages.goToCIFBooking();
        await LoanBookingPages.BasicInformations();
        await LoanBookingPages.Detailformations();
        await page.pause();
    })