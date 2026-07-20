import { Page, Locator, expect } from '@playwright/test'
import { RandomDataUtil } from '../utils/RandomGenerator';

export class LoanBookingPage {
  private readonly page: Page;
  private readonly CIFModule: Locator;
  private readonly CIFBooking: Locator;
  private readonly BasicInformation: Locator;
  


  constructor(page: Page) {
    this.page = page;
    this.CIFModule = this.page.locator('div').filter({ hasText: /^CIF Module$/ });
    this.CIFBooking = this.page.getByRole('menuitem', { name: 'CIF Booking' });
    this.BasicInformation = this.page.locator("#BasicInformation").getByText("Basic Information");
  }

  async goToCIFBooking(): Promise<void> {
    await this.CIFModule.click();
    await this.CIFBooking.click();
    await this.BasicInformation.waitFor({ state: 'visible' });

  }
  async BasicInformations(): Promise<void> {
    await this.page.locator("#clientType").click();
    await this.page.getByText("Personal").click();
    await this.page.locator("#countryLoc").click();
    await this.page.getByText("Philippines").click();
  }

  async Detailformations(tes:string): Promise<void> {
    const firstName = this.page.locator("#givenName");
    await firstName.waitFor({ state: 'visible' });
    await firstName.fill(RandomDataUtil.getFirstName());

    const surname = this.page.locator("#surname");
    await surname.waitFor({ state: "visible" });
    await surname.fill(RandomDataUtil.getlastName());

    const sex = this.page.locator("#sex");
    await sex.waitFor({ state: "visible" });
    await sex.click();
    const sexOptions = this.page.getByRole("option");
    await sexOptions.nth(Math.floor(Math.random() * await sexOptions.count())).click();

    const mothersMaidenName = this.page.locator("#mothersMaidenName");
    await mothersMaidenName.waitFor({ state: "visible" });
    await mothersMaidenName.fill(RandomDataUtil.getlastName());

    const monSalary = this.page.locator("#monSalary");
    await monSalary.waitFor({ state: "visible" });
    await monSalary.fill("150000");

    const averageMonSalary = this.page.locator("#averageMonSalary");
    await averageMonSalary.waitFor({ state: "visible" });
    await averageMonSalary.click();
    await this.page.getByRole("option").first().click();

    const sourceOfFunds = this.page.locator("#sourceOfFunds");
    await sourceOfFunds.waitFor({ state: "visible" });
    await sourceOfFunds.click();
    await this.page.getByRole("option", { name: "Salary" }).click();

    const maritalStatus = this.page.locator("#maritalStatus");
    await maritalStatus.waitFor({ state: "visible" });
    await maritalStatus.click();
    await this.page.getByRole("option", { name: "Single" }).click();

    const occupation = this.page.locator("#occupation");
    await occupation.waitFor({ state: "visible" });
    await occupation.click();
    const occupationOptions = this.page.getByRole("option");
    await occupationOptions.first().waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await occupationOptions.nth(Math.floor(Math.random() * await occupationOptions.count())).click();

    const industry = this.page.locator("#industry");
    await industry.waitFor({ state: "visible" });
    await industry.click();
    const industryOptions = this.page.getByRole("option");
    await industryOptions.first().waitFor({ state: 'visible' });
    await this.page.waitForTimeout(100);
    await this.page.getByRole("option", {
    name: tes,
    exact: true
}).click();
    //await industryOptions.getByRole('option', { name: "Call Center" }).click();
    //await industryOptions.nth(Math.floor(Math.random() * await industryOptions.count())).click();

    const birthDate = this.page.locator("#birthDate");
    await birthDate.waitFor({ state: "visible" });
    await birthDate.click();

    const birthDateInput = this.page.locator(".ant-calendar-input");
    await birthDateInput.waitFor({ state: "visible" });
    await birthDateInput.fill(RandomDataUtil.generateBirthDate());
    await birthDateInput.press("Enter");

    const education = this.page.locator("#education");
    await education.waitFor({ state: "visible" });
    await education.click();
    const educationOptions = this.page.getByRole("option");
    await educationOptions.nth(Math.floor(Math.random() * await educationOptions.count())).click();

    const lastAmlUpdDate = this.page.locator("#lastAmlUpdDate");
    await lastAmlUpdDate.waitFor({ state: "visible" });
    await lastAmlUpdDate.click();

    const today = this.page.locator(".ant-calendar-today");
    await today.waitFor({ state: "visible" });
    await today.click();

    const lastAmlUpdReason = this.page.locator("#lastAmlUpdReason");
    await lastAmlUpdReason.waitFor({ state: "visible" });
    await lastAmlUpdReason.fill("test");

    const amlRiskLevel = this.page.locator("#amlRiskScore");
    await amlRiskLevel.waitFor({ state: "visible" });
    await amlRiskLevel.fill("1");
    const AMLRiskLevel2 = this.page.locator("#amlRiskLevel");
    await AMLRiskLevel2.waitFor({ state: "visible" });
    await AMLRiskLevel2.click();
    await this.page.getByRole("option", { name: "Low" }).click();

    const pepInd = this.page.locator("#pepInd");
    await pepInd.waitFor({ state: "visible" });
    await pepInd.click();
    await this.page.getByRole("option", { name: "No" }).click();

    const btn = this.page.locator("button[type='button']");
    const idInformation = btn.nth(0);
    await idInformation.waitFor({ state: "visible" });
    await expect(idInformation).toBeVisible();
    await idInformation.click();


    //ID Information

    const idType = this.page.locator("#documentType");
    await idType.waitFor({ state: "visible" });
    await idType.click();

    const idTypeOptions = this.page.getByRole("option");
    await idTypeOptions.first().waitFor({ state: 'visible' });
    await idTypeOptions.nth(Math.floor(Math.random() * await idTypeOptions.count())).click();

    const IDNo = this.page.locator("#documentId");
    await IDNo.waitFor({ state: "visible" });
    await IDNo.fill(RandomDataUtil.getRandomNumeric(12));
    const IDInfoBtn = this.page.locator("#DocumentInfo").getByRole('button', { name: 'Submit' });
    await IDInfoBtn.waitFor({ state: 'visible' });
    await IDInfoBtn.click();

    //ContactNumber
    const ContactInfro = this.page.locator("#ContactNumber").getByRole('button', { name: 'Add' });
    await ContactInfro.waitFor({ state: "visible" })
    await ContactInfro.click()

    const contactType = this.page.locator("#contactType");
    await contactType.waitFor({ state: "visible" })
    await contactType.click();


    const contactTypeOptions = this.page.getByRole('option', { name: '13-Mobile contact information 1' })
    await contactTypeOptions.waitFor({ state: "visible" })
    await contactTypeOptions.click();

    const AreaCode = this.page.locator("#countryTel")
    await AreaCode.waitFor({ state: "visible" })
    await AreaCode.fill("63");

    const mobileNum = this.page.locator("#mobilePhone");
    await mobileNum.waitFor({ state: "visible" })
    console.log(RandomDataUtil.generateMobileNumber())
    await mobileNum.fill(RandomDataUtil.generateMobileNumber());

    const contactAddress = this.page.locator("#AdreessConfig").getByRole('button', { name: 'Submit' });
    await contactAddress.waitFor({ state: "visible" });
    await contactAddress.click();


    //Contact Address
    const contactAddressInput = this.page.locator("#ContactAddress").getByRole('button', { name: 'Add' });
    await contactAddressInput.waitFor({ state: "visible" });
    await contactAddressInput.click();

    const contactType1 = this.page.locator("#contactType");
    await contactType1.waitFor({ state: "visible" });
    await contactType1.click();

    const selectContactType = this.page.getByText("21-present address");
    await selectContactType.waitFor({ state: "visible" });
    await selectContactType.click();

    const country = this.page.locator("#country");
    await country.waitFor({ state: "visible" });
    await country.click();

    const selectCountry1 = this.page.getByRole('option', { name: 'PH' })
    await selectCountry1.first().waitFor({ state: 'visible' });
    await selectCountry1.click();

    const stateProvince = this.page.locator("#state");
    await stateProvince.waitFor({ state: "visible" });
    await stateProvince.click();
    const stateOptions = this.page.getByRole("option");
    await stateOptions.first().waitFor({ state: 'visible' });
    await this.page.waitForTimeout(200);
    await stateOptions.nth(Math.floor(Math.random() * await stateOptions.count())).click();


    const City = this.page.locator("#city");
    await City.waitFor({ state: "visible" });
    await City.click();
    const CityOption = this.page.getByRole("option");
    await CityOption.first().waitFor({ state: 'visible' });
    await this.page.waitForTimeout(200);
    await CityOption.nth(Math.floor(Math.random() * await stateOptions.count())).click();


    const barangay = this.page.locator("#barangay");
    await barangay.waitFor({ state: "visible" });
    await barangay.click();
    const barangayOptions = this.page.getByRole("option");
    await barangayOptions.first().waitFor({ state: 'visible' });
    await this.page.waitForTimeout(200);
    await barangayOptions.nth(Math.floor(Math.random() * await stateOptions.count())).click();

    await this.page.waitForTimeout(600);

    const contactAddress1 = this.page.locator("#AdreessConfig").getByRole('button', { name: 'Submit' });
    await contactAddress1.waitFor({ state: "visible" });
    await contactAddress1.click();

    //Email Address
    const emailBtn = this.page.locator("#EmailAddress").getByRole("button", { name: 'Add' });
    await emailBtn.waitFor({ state: "visible" });
    await emailBtn.click();

    const emailDrpDwn = this.page.locator("#contactType");
    await emailDrpDwn.first().waitFor({ state: "visible" });
    await emailDrpDwn.click();



    const emailAdd = this.page.getByRole('option');
    await emailAdd.first().waitFor({ state: "visible" });
    await this.page.waitForTimeout(200)
    await emailAdd.nth(0).click();

    const emailfield = this.page.locator("#address");
    await emailfield.fill(RandomDataUtil.getEmail());

    const EmailSubmitBtn = this.page.locator("#AdreessConfig").getByRole('button', { name: 'Submit' });
    await EmailSubmitBtn.waitFor({ state: "visible" });
    await EmailSubmitBtn.click();


    //Emergency Contact
    const LinkmanBtn = this.page.locator("#EmergencyContact").getByRole("button", { name: 'Add' });
    await LinkmanBtn.waitFor({ state: "visible" });
    await LinkmanBtn.click();

    const LinkManField = this.page.locator("#linkmanType");
    await LinkManField.waitFor({ state: "visible" });
    await LinkManField.click();

    const LinkManDrpDwn = this.page.getByRole("option");
    await LinkManDrpDwn.first().waitFor({ state: 'visible' });
    await LinkManDrpDwn.nth(Math.floor(Math.random() * await LinkManDrpDwn.count())).click();

    const LinkManName = this.page.locator("#linkmanName");
    await LinkManName.waitFor({ state: "visible" })
    await LinkManName.fill(RandomDataUtil.getFirstName());

    const EmngyContactBtm = this.page.locator("#EmergencyRow").getByRole('button', { name: 'Submit' });
    await EmngyContactBtm.waitFor({ state: "visible" });
    await EmngyContactBtm.click();

    //Employment Information

    const employerName = this.page.locator("#employerName");
    await employerName.waitFor({ state: "visible" })
    await employerName.fill("Wessuport");

    const employerType = this.page.locator("#employerType");
    await employerType.waitFor({ state: "visible" });
    await employerType.click();

    const employerDrpDwn = this.page.getByRole("option");
    await employerDrpDwn.first().waitFor({ state: 'visible' });
    await employerDrpDwn.last().click();

    const EmngyContactBtm1 = this.page.getByRole('button', { name: 'submit' });
    await EmngyContactBtm1.waitFor({ state: "visible" });
    await EmngyContactBtm1.click();
    await this.page.waitForTimeout(1000);
  }

}

