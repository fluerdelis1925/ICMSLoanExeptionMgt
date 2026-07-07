import {test, expect} from '@playwright/test'
import {LoginPage} from '../Pages/LoginIcms'
import { LoanExceptionModules } from '../Pages/LoanExeptionModule';
import { LoanExceptionPage } from '../Pages/LoanExeptionPage';
import { readCSV } from '../Pages/CsvReader';
import { TestConfig } from '../test.config';


let config = new TestConfig();
let loginPages: LoginPage;
let loanExceptionModule: LoanExceptionModules;
let LoanException: LoanExceptionPage;

const records = readCSV("testdata/LOAN_DISBURSEMENT_2026061101.csv");

test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl)
 
     loginPages = new LoginPage(page)
     loanExceptionModule = new LoanExceptionModules(page);
    LoanException = new LoanExceptionPage(page);
})

test('Loan Exection Mgt', async({page})=>
{

  await page.goto(config.appUrl);
  await loginPages.loginICMS(config.email, config.password);
  await loanExceptionModule.openLoanException();

  await LoanException.selectFutureDate("2024/06/29","2033/06/29");
      for(const data of records){

        await LoanException.searchLoan(data.baseAcctNo);

        await LoanException.repostIfPending(data.baseAcctNo);

    }

})