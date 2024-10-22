import { test, expect } from "@playwright/test";
import { OrganizationCreatePage } from "../pages/Organizations/OrganizationsCreatePage";
import { MockarooService } from "../data/MockarooService";

// Use the correct `test.beforeAll`
test.beforeAll(async ({}) => {
  const mockarooService = new MockarooService();
  const formDataArray = await mockarooService.fetchMockarooData(
    "Organizations",
    1
  );
  console.log(formDataArray);
});

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page.getByText("Welcome")).toBeVisible();
});

test("login", async ({ page }) => {
  const organizationCreatePage = new OrganizationCreatePage(page);
  await page.goto("/");

  // NEED TO MOVE THIS TO A SETUP FLOW AND MAKE A DEPENDENCY
  await page
    .locator("#username")
    .fill("brians-bearings-bolts@xto.dev.ecimfgtest.com");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.locator("#password").fill("8ztT46W2UTMmgSXSX8");
  await page.getByRole("button", { name: "Continue" }).click();

  // Expects page to have a heading with the name "Welcome to XTO".
  await expect(
    page.getByRole("heading", { name: "Welcome to XTO" })
  ).toBeVisible();

  // Testing filling a text field
  await page.goto("/filter/organizations");
  await page.locator("#new").click();
  await expect(
    page.getByRole("heading", { name: "Create Organization" })
  ).toBeVisible();

  // Fill form
  await organizationCreatePage.fillForm("Brian Org", "BGE");
});

// THIS IS THE GOAL!!!
// import { test, expect } from '@playwright/test';
// import { OrganizationCreatePage } from '../pages/OrganizationCreatePage';

// test('fill organization form', async ({ page }) => {
//   const organizationCreatePage = new OrganizationCreatePage(page);
//   await organizationCreatePage.navigateTo('/organizations/create');

//   const formData = {
//     OrgCode: '12345',
//     OrgName: 'Example Organization',
//     AddressLine1: '123 Main St',
//     AddressLine2: '',
//     AddressLine3: '',
//     City: 'Anytown',
//     County: 'Anycounty',
//     State: 'Anystate',
//     PostCode: '12345',
//     PhoneNumber: '123-456-7890',
//     AlternatePhoneNumber: '098-765-4321',
//     FaxPhone: '123-456-7891',
//     Email: 'example@example.com',
//     WebAddress: 'https://example.com',
//     CustomerStatus: 'Active',
//     CustomerProspectDate: '2023-01-01',
//     CustomerActiveDate: '2023-01-02',
//     CustomerInactiveDate: '',
//     Requires1099: 'No',
//     Form1099Box: 'Rents',
//     SupplierStatus: 'Active',
//     SupplierProspectDate: '2023-01-01',
//     SupplierActiveDate: '2023-01-02',
//     SupplierInactiveDate: '',
//     CreditHold: 'No',
//     DirectPayment: 'Yes',
//     BankInitials: 'ABC',
//     BankRoutingNumber: '123456789',
//     BankAccountNumber: '987654321',
//     BankAccountName: 'Example Bank',
//     BankAccountType: 'Checking',
//     UsaTransactionTypeCode: 'ACH',
//     CreditLimit: '10000',
//     CompanyEntryDescription: 'Example Entry',
//     EstablishedDate: '2023-01-01',
//     Currency: 'USD',
//     IndustryType: 'Technology',
//     OrganizationDescription: 'An example organization',
//     Salesperson: 'John Doe'
//   };

//   await organizationCreatePage.fillForm(formData);

//   // Additional assertions if needed
//   await expect(page.getByText('Form submitted successfully')).toBeVisible();
// });
