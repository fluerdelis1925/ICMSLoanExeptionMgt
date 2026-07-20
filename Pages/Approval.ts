import { Page, Locator } from '@playwright/test'

export class Approval {
    private readonly approvalModule;
    private readonly approvalList;
    private readonly page: Page;
    private readonly tableRows: Locator;
    private readonly ApprovalStatus;
    private readonly ApprovalLovs;

    constructor(page: Page) {
        this.page = page;
        this.approvalModule = this.page.locator('div').filter({ hasText: /^Approval Module$/ });
        this.approvalList = this.page.getByRole('menuitem', { name: 'Approval List' });
        this.ApprovalStatus = this.page.locator("#search_status")
        this.ApprovalLovs = this.page.getByRole("option", { name: "Pending Review" });
        this.tableRows = page.locator("tbody tr");

    }


    async ToapprovalModule() {
        await this.approvalModule.click();


    }

    async ToApprovalList() {

        await this.approvalList.click();


    }
    async approvePending(ApprovalStatus: string): Promise<void> {
        await this.page.waitForTimeout(500);
        this.ApprovalStatus.waitFor({ state: "visible" });
        this.ApprovalStatus.click();

        await this.page.waitForTimeout(500);
        this.ApprovalLovs.first().waitFor({ state: "visible" })

        this.ApprovalLovs.click();

        await this.page.waitForTimeout(500);
        await this.page.getByRole("button", { name: "Query" }).click();
        await this.page.waitForTimeout(1000);
        console.log("Query button clicked");
        console.log("approvePending called");

        const rows = await this.tableRows.all();
        console.log("Rows:", rows.length);
      
        let apr = true;
        while(apr)
        {
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const cols = await row.locator("td").allInnerTexts();
            console.log(cols);
            if (cols.length < 5) {
                continue;
            }
            const applyDate = cols[4].split(" ")[0];
            const applyDates = cols[2];
            const applyDatess = cols[3];
            if (applyDatess === ApprovalStatus) {

               await this.page.waitForTimeout(500);
                await this.page.getByRole('button', { name: 'icon: edit Approval' }).first().click(); 
                await this.page.waitForTimeout(500);  
                await this.page.locator('div').filter({ hasText: /^please choose\.\.\.$/ }).nth(4).click();
                await this.page.waitForTimeout(500);
                await this.page.getByRole('option', { name: 'Agree', exact: true }).click();
                await this.page.waitForTimeout(500);
                await this.page.getByRole('textbox', { name: 'please enter...' }).click();
                await this.page.waitForTimeout(500);
                await this.page.getByRole('textbox', { name: 'please enter...' }).fill('ok');
                await this.page.waitForTimeout(500);
                await this.page.getByRole('button', { name: 'Submit' }).click();
                await this.page.waitForTimeout(2000);
                

            }
            else
            {
              await this.page.locator('.ant-pagination-next > .ant-pagination-item-link').click();
            }
            
        }
      
    }
    }



}