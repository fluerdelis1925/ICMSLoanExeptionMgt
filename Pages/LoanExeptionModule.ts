import { Page } from '@playwright/test';

export class LoanExceptionModules {

    constructor(private page: Page){}

    async openLoanException() {

        await this.page.locator('div')
            .filter({ hasText: /^Loan Management$/ })
            .click();

        await this.page.getByRole('menuitem', {
            name: 'Loan Exception Mgt'
        }).click();

    }

}