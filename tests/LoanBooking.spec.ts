
import { test, expect} from '@playwright/test';
import {TestConfig} from '../test.config'
import { LoginPage } from '../Pages/LoginIcms';
import {LoanBookingPage} from '../Pages/LoanBookingModule';
import {RandomDataUtil} from '../utils/RandomGenerator'


let config = new TestConfig();
let loginPages: LoginPage;
let LoanBookingPages: LoanBookingPage;
let RandomDataUtils: RandomDataUtil;


test.beforeEach('', async({page})=>
{
 config = new TestConfig();
 await page.goto(config.appUrl);

 loginPages = new LoginPage(page);
 LoanBookingPages = new  LoanBookingPage(page);
 config = new TestConfig();
 RandomDataUtils = new RandomDataUtil();

})



test('Loan Booking', async({page})=>
    {
        await loginPages.loginICMS(config.email, config.password);
        await LoanBookingPages.goToCIFBooking();
        await LoanBookingPages.BasicInformations();
        await LoanBookingPages.Detailformations("dasda");
        await page.pause();
    })
