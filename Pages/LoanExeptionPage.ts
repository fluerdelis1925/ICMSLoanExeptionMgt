import { Locator, Page, expect } from '@playwright/test';

export class LoanExceptionPage {

    readonly loanNoTextbox: Locator;
    readonly searchButton: Locator;
    readonly repostButton: Locator;
    readonly tableRows: Locator;
    private readonly btn : Locator;
    private readonly startDate : Locator;
    private readonly EndDate : Locator;
    private readonly selectDate : Locator;

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
        this.startDate = 
            page.getByRole('textbox', { name: 'Start date' }).nth(1)
          this.EndDate = 
            page.getByRole('textbox', { name: 'End date' }).nth(1)
            this.selectDate =
           page.getByRole('textbox', { name: 'Start date' });

    }

    async selectFutureDate(strtDate: string, endDate: string){

        await this.selectDate.click();
        await this.startDate.fill(strtDate);
        await this.EndDate.fill(endDate);
        await this.EndDate.press('Enter');




    }

    async searchLoan(loanNo: string){

        await this.loanNoTextbox.fill(loanNo);
        await this.searchButton.click();
        
              //  await this.page.waitForTimeout(3000)

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