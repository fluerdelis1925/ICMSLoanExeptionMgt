import {test, expect} from '@playwright/test'
import {LoginPage} from '../Pages/LoginIcms'
import { HomePage } from '../Pages/Homepage';
import { LoanExceptionPage } from '../Pages/LoanExeptionPage';
import { readCSV } from '../Pages/CsvReader';


const records = readCSV("testdata/LOAN_DISBURSEMENT_2026061101.csv");
test('Loan Exception Mgt', async({page})=>
{

  await page.goto("https://sso-integrator-sbf-uat5.ocft.com.sg/login-page?systems=icms");
  const loginPages = new LoginPage(page);
  await loginPages.loginICMS("dinsular@vertere-gs.com","dinsular@vertere-gs.com");

  const Homepages = new HomePage(page);
  await Homepages.loanInquiryInterestAccrual();
  await page.pause();


})