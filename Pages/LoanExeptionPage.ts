import { Locator, Page, expect } from '@playwright/test';

export class LoanExceptionPage {

    readonly loanNoTextbox: Locator;
    readonly searchButton: Locator;
    readonly repostButton: Locator;
    readonly tableRows: Locator;
    private readonly btn : Locator;

    constructor(private page: Page){

        this.loanNoTextbox =
            page.getByRole('textbox', { name: 'Loan/Borrow No.:' });

        this.searchButton =
            page.getByRole('button', { name: 'icon: search Query' });

        this.repostButton =
            page.getByRole('button', { name: 'Repost' });

        this.tableRows =
            page.locator("tbody tr");
        this.btn = 
            page.getByRole('radio');

    }

    async selectFutureDate(){

        await this.page.getByRole('textbox', { name: 'End date' }).click();

        await this.page.getByTitle('Next year (Control + right)').dblclick();
        await this.page.getByTitle('Next year (Control + right)').nth(1).dblclick();
        await this.page.getByTitle('Next year (Control + right)').nth(1).click();
        await this.page.getByTitle('Next year (Control + right)').nth(1).dblclick();

        await this.page.getByText('31').nth(2).click();
        await this.page.getByText('1').nth(2).click();

    }

    async searchLoan(loanNo: string){

        await this.loanNoTextbox.fill(loanNo);
        await this.searchButton.click();

    }

    async repostIfPending(loanNo: string){

        const rows = await this.tableRows.all();

        for(const row of rows){

            const cols = await row.locator('td').allInnerTexts();
            
            console.log(
                "Loan:",
                loanNo,
                "Status:",
                cols[8]
            );

            if(cols[8] === "Pending"){

                await this.btn.click();

                await this.repostButton.click();

                console.log("Reposted");

            }
        }

    }

}