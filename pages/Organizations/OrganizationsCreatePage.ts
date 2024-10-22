import { BasePage } from "../BasePage";
import { Page } from "@playwright/test";
import { Textfield } from "../../fixtures/components/Textfield";
import { Typeahead } from "../../fixtures/components/Typeahead";
import { expect } from "@playwright/test";
import { MockarooService } from "../../data/MockarooService";
import { OrganizationFormData } from "./Organizations.model";

export class OrganizationCreatePage extends BasePage {
  private name: Textfield;
  private code: Textfield;

  constructor(page: Page) {
    super(page);
    this.name = new Textfield(page, "#OrganizationCreateNameField");
    this.code = new Textfield(page, "#OrganizationCreateCodeField");
  }

  async fillForm(name: string, code: string) {
    await this.name.fill("Brian Org");
    const nameValue = await this.page.inputValue(
      "#OrganizationCreateNameField"
    );
    expect(nameValue).toBe(name);
    await this.code.fill("BGE");

    const codeValue = await this.page.inputValue(
      "#OrganizationCreateCodeField"
    );

    expect(codeValue).toBe(code);
  }
}
//THIS IS THE GOAL
// // import { Page } from '@playwright/test';
// import { BasePage } from '../BasePage';
// import { OrganizationFormInputs } from '../models/Organizations.model';
// import { Textfield } from '../components/Textfield';

// export class OrganizationCreatePage extends BasePage {
//   private formInputs: OrganizationFormInputs;

//   constructor(page: Page) {
//     super(page);
//     this.formInputs = {
//       OrgCode: new Textfield(page, '#OrgCode'),
//       OrgName: new Textfield(page, '#OrgName'),
//       AddressLine1: new Textfield(page, '#AddressLine1'),
//       AddressLine2: new Textfield(page, '#AddressLine2'),
//       AddressLine3: new Textfield(page, '#AddressLine3'),
//       City: new Textfield(page, '#City'),
//       County: new Textfield(page, '#County'),
//       State: new Textfield(page, '#State'),
//       PostCode: new Textfield(page, '#PostCode'),
//       PhoneNumber: new Textfield(page, '#PhoneNumber'),
//       AlternatePhoneNumber: new Textfield(page, '#AlternatePhoneNumber'),
//       FaxPhone: new Textfield(page, '#FaxPhone'),
//       Email: new Textfield(page, '#Email'),
//       WebAddress: new Textfield(page, '#WebAddress'),
//       CustomerStatus: new Textfield(page, '#CustomerStatus'),
//       CustomerProspectDate: new Textfield(page, '#CustomerProspectDate'),
//       CustomerActiveDate: new Textfield(page, '#CustomerActiveDate'),
//       CustomerInactiveDate: new Textfield(page, '#CustomerInactiveDate'),
//       Requires1099: new Textfield(page, '#Requires1099'),
//       Form1099Box: new Textfield(page, '#Form1099Box'),
//       SupplierStatus: new Textfield(page, '#SupplierStatus'),
//       SupplierProspectDate: new Textfield(page, '#SupplierProspectDate'),
//       SupplierActiveDate: new Textfield(page, '#SupplierActiveDate'),
//       SupplierInactiveDate: new Textfield(page, '#SupplierInactiveDate'),
//       CreditHold: new Textfield(page, '#CreditHold'),
//       DirectPayment: new Textfield(page, '#DirectPayment'),
//       BankInitials: new Textfield(page, '#BankInitials'),
//       BankRoutingNumber: new Textfield(page, '#BankRoutingNumber'),
//       BankAccountNumber: new Textfield(page, '#BankAccountNumber'),
//       BankAccountName: new Textfield(page, '#BankAccountName'),
//       BankAccountType: new Textfield(page, '#BankAccountType'),
//       UsaTransactionTypeCode: new Textfield(page, '#UsaTransactionTypeCode'),
//       CreditLimit: new Textfield(page, '#CreditLimit'),
//       CompanyEntryDescription: new Textfield(page, '#CompanyEntryDescription'),
//       EstablishedDate: new Textfield(page, '#EstablishedDate'),
//       Currency: new Textfield(page, '#Currency'),
//       IndustryType: new Textfield(page, '#IndustryType'),
//       OrganizationDescription: new Textfield(page, '#OrganizationDescription'),
//       Salesperson: new Textfield(page, '#Salesperson'),
//     };
//   }

//   async fillForm(data: { [key in keyof OrganizationFormInputs]: string }) {
//     for (const [key, value] of Object.entries(data)) {
//       await this.formInputs[key as keyof OrganizationFormInputs].fill(value);
//     }
//   }
// }
