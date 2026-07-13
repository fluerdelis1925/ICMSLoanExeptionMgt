import {test, locator, expect, Locator} from "@playwright/test"


test("CIF Creation", async({page})=>
    
{

 function generateRandomString(length: number = 7): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }

  return result;
}

 function generateRandomString1 (length: number = 7): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }

  return result;
}


function generateNumber(): string {
    let result = '9'; // first digit is fixed

    for (let i = 0; i < 9; i++) {
        result += Math.floor(Math.random() * 10).toString();
    }

    return result;
}



const randomValue = generateRandomString();
const randomValue1 = generateRandomString1();
 const combined = `${randomValue} ${randomValue1}`


    await page.goto("https://sso-integrator-sbf-uat1.ocft.com.sg/login-page?systems=icms");
    const loginButton=page.locator("button[type='submit']");

    const username=page.locator("input#userName");
    await expect(username).toBeVisible();
    await username.fill("dinsular@vertere-gs.com");
   
    await expect(loginButton).toBeVisible();
    await loginButton.click();

    const password=page.locator("input#password");
    await expect(password).toBeVisible();
    await password.fill("dinsular@vertere-gs.com");

    await expect(loginButton).toBeVisible();
    await loginButton.click();
   
   
    const CIFModule =page.getByText("CIF Module");
    await expect(CIFModule).toBeVisible();
    await CIFModule.click();

    const CIFBooking = page.getByText("CIF Booking");
    await expect(CIFBooking).toBeVisible();
    await CIFBooking.click();

    const CustomerTypes = page.locator("#clientType");
    await expect(CustomerTypes).toBeVisible();
    await CustomerTypes.click();

    const SelectCustomerType = page.getByText("Personal");
    await expect(SelectCustomerType).toBeVisible();
    await SelectCustomerType.click();

    const CustomerName = page.locator("#clientName");
    await expect(CustomerName).toBeVisible();
    await CustomerName.fill(combined);

   const countryLoc = page.locator("#countryLoc");
   await expect(countryLoc).toBeVisible();
   await countryLoc.click();

   const selectCountry = page.getByText("Philippines");
   await expect(selectCountry).toBeVisible();
   await selectCountry.click();
   
   const FirstName = page.locator("#givenName");
   await expect(FirstName).toBeVisible();
   await FirstName.fill(randomValue);
   
   const SurName = page.locator("#surname");
   await expect(SurName).toBeVisible();
   await SurName.fill(randomValue1)
 
   const Gender = page.locator("#sex");
   await expect(Gender).toBeVisible();
   await Gender.click();

   const options = page.getByRole('option');
   const count = await options.count();

   const randomIndex = Math.floor(Math.random() * count);
   await options.nth(randomIndex).click();
   
   const motherMaidenName = page.locator("#mothersMaidenName");
   await expect(motherMaidenName).toBeVisible();
   await motherMaidenName.fill("test "+randomValue1);

   const averageMonthlyIncome = page.locator("#averageMonSalary");
   await expect(averageMonthlyIncome).toBeVisible();
   await averageMonthlyIncome.click();

   const incimeOptions = page.getByRole('option');
   await incimeOptions.nth(3).click();
 
   const sourceOfFund = page.locator("#sourceOfFunds");
   await expect(sourceOfFund).toBeVisible();
   await sourceOfFund.click(); 

  const sourceOfFundOptions = page.getByRole('option', { name: 'Salary' })
  await expect(sourceOfFundOptions).toBeVisible();
  await sourceOfFundOptions.click();

  const maritalStatus = page.locator("#maritalStatus");
  await expect(maritalStatus).toBeVisible();
  await maritalStatus.click();

 const maritalStatusOptions = page.getByRole('option', { name: 'Single' })
 await expect(maritalStatusOptions).toBeVisible();
 await maritalStatusOptions.click();


 const birthDate1 = page.locator("#birthDate");
 await expect(birthDate1).toBeVisible();
 await birthDate1.click();

 function generateBirthDate(): string {
  const year = Math.floor(Math.random() * (2005 - 1992 + 1)) + 1992;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1;

  const formattedMonth = month.toString().padStart(2, '0');
  const formattedDay = day.toString().padStart(2, '0');

  return `${year}/${formattedMonth}/${formattedDay}`;
}

const birthDate = generateBirthDate();

const birthDateInput = page.locator(".ant-calendar-input");
await expect(birthDateInput).toBeVisible();
await birthDateInput.fill(birthDate);
await page.keyboard.press('Enter');

const educationLevel = page.locator("#education");
await expect(educationLevel).toBeVisible();
await educationLevel.click();

const educationLevelOptions = page.getByRole('option', { name: 'College' })
await expect(educationLevelOptions).toBeVisible();
await educationLevelOptions.click();

const AMLRiskUpdate = page.locator("#lastAmlUpdDate");
await expect(AMLRiskUpdate).toBeVisible();
await AMLRiskUpdate.click();

await page.locator('.ant-calendar-today').click();
const AMLRiskUpdateInput = page.locator("#lastAmlUpdReason");
await expect(AMLRiskUpdateInput).toBeVisible();
await AMLRiskUpdateInput.fill("test ");

const AMLRiskScore = page.locator("input[role='spinbutton']");
await expect(AMLRiskScore).toBeVisible();
await AMLRiskScore.fill("1");


const AMLRiskLevel = page.locator("#amlRiskLevel");
await expect(AMLRiskLevel).toBeVisible();
await AMLRiskLevel.click();

const AMLRiskLevelOptions = page.getByRole('option', { name: 'Low' })
await expect(AMLRiskLevelOptions).toBeVisible();
await AMLRiskLevelOptions.click();

const PepFlag = page.locator("#pepInd");
await expect(PepFlag).toBeVisible();
await PepFlag.click();

const PepFlagOptions = page.getByRole('option', { name: 'No' })
await expect(PepFlagOptions).toBeVisible();
await PepFlagOptions.click();

    const btn = page.locator("button[type='button']");
    const idInformation = btn.nth(0);
    await expect(idInformation).toBeVisible();
    await idInformation.click();

    const idType = page.locator("#documentType");
    await expect(idType).toBeVisible();
    await idType.click();

    await page.waitForTimeout(1000);
    const idTypeOptions = page.getByRole('option', { name: '04-Unified Multi-purpose ID' })
    await expect(idTypeOptions).toBeVisible();
    await idTypeOptions.click();
function generate16DigitNumber(): string {
  let result = '';

  for (let i = 0; i < 16; i++) {
    result += Math.floor(Math.random() * 10);
  }

  return result;
}

   const random16DigitNumber = generate16DigitNumber();

    const idNumber = page.locator("#documentId");
    await expect(idNumber).toBeVisible();
    await idNumber.fill(random16DigitNumber);

    await page.locator("#DocumentInfo").getByRole('button', { name: 'Submit' }).click();

    const ContactInfro = page.locator("#ContactNumber").getByRole('button', { name: 'Add' });
    await expect(ContactInfro).toBeVisible();
    await ContactInfro.click()

    const contactType = page.locator("#contactType");
    await expect(contactType).toBeVisible();
    await contactType.click();

    const contactTypeOptions = page.getByRole('option', { name: '13-Mobile contact information 1' })
    await expect(contactTypeOptions).toBeVisible();
    await contactTypeOptions.click();

    await page.locator("#countryTel").fill("63");
    await page.locator("#mobilePhone").fill(generateNumber());
    const contactAddress = page.locator("#AdreessConfig").getByRole('button', { name: 'Submit' });
    await contactAddress.click();

    const contactAddressInput = page.locator("#ContactAddress").getByRole('button', { name: 'Add' });
    await contactAddressInput.click();

    const contactType1 = page.locator("#contactType");
    await contactType1.click();
    const selectContactType = page.getByText("21-present address");
    await selectContactType.click();

    const country = page.locator("#country");
    await country.click();

    const selectCountry1 = page.getByRole('option', { name: 'PH' })

    await selectCountry1.click();

    const stateProvince = page.locator("#state");
    await stateProvince.click();

   const StateOptions = page.getByRole('option');
   const count1 = await StateOptions.count();

   const randomIndex1 = Math.floor(Math.random() * count1);
   await StateOptions.nth(randomIndex1).click(); 

   const city = page.locator("#city");
   await city.click();

   await page.waitForTimeout(1000);
   const selectCity = page.getByRole('option');
   const count2 = await selectCity.count();

   const selectCity1 = Math.floor(Math.random() * count2);
   await selectCity.nth(selectCity1).click(); 

   const brgy = page.locator("#barangay");
   await brgy.click();
    
   await page.waitForTimeout(1000);
   const selectbrgy = page.getByRole('option');
   const numofBrgy = await selectCity.count();

   const numofBrgy1 = Math.floor(Math.random() * numofBrgy);
   await selectbrgy.nth(numofBrgy1).click();

   await page.waitForTimeout(1000);
   const contactAddress1 = page.locator("#AdreessConfig").getByRole('button', { name: 'Submit' });
    await contactAddress1.click();

  await page.locator("#EmailAddress").getByRole("button",{name: 'Add'}).click() ;
  await page.locator

  await page.locator("#contactType").click();
  await page.getByText("#15-Email information").click();
  const email: string = `${FirstName}+${SurName}@example.com`;
  await page.locator("#address").fill(email)



    
    await page.pause();

})
