import { Textfield } from "../../fixtures/components/Textfield";

export interface OrganizationFormData {
  OrgCode: string;
  OrgName: string;
  AddressLine1: string;
  AddressLine2: string;
  AddressLine3: string;
  City: string;
  County: string;
  State: string;
  PostCode: string;
  PhoneNumber: string;
  AlternatePhoneNumber: string;
  FaxPhone: string;
  Email: string;
  WebAddress: string;
  CustomerStatus:
    | "Prospective Customer"
    | "Active Customer"
    | "Inactive Customer"
    | "";
  CustomerProspectDate: string;
  CustomerActiveDate: string;
  CustomerInactiveDate: string;
  Requires1099: boolean;
  Form1099Box:
    | "Rents"
    | "Royalties"
    | "Other Income"
    | "Fishing Boat Proceeds"
    | "Medical And Healthcare Payments"
    | "Non Employee Compensation"
    | "Substitute Payments In Lieu Of Dividends Or Interest"
    | "Crop Insurance Proceeds"
    | "Fish Purchased For Resale"
    | "Excess Golden Parachute Payments"
    | "Gross Proceeds Paid To An Attorney"
    | "";
  SupplierStatus:
    | "Prospective Supplier"
    | "Active Supplier"
    | "Inactive Supplier";
  SupplierProspectDate: string;
  SupplierActiveDate: string;
  SupplierInactiveDate: string;
  CreditHold: boolean;
  DirectPayment: boolean;
  BankInitials: string;
  BankRoutingNumber: number;
  BankAccountNumber: number;
  BankAccountName: string;
  BankAccountType:
    | "Checking Account"
    | "Checking Prenote"
    | "Loan Account"
    | "Savings Prenote";
  UsaTransactionTypeCode:
    | "Annuity"
    | "Business/Commercial"
    | "Deposit"
    | "Internet-Initiated Transaction"
    | "Loan"
    | "Miscellaneous"
    | "Mortgage"
    | "Pension"
    | "Rent/Lease"
    | "Salary/Payroll"
    | "Tax";
  CreditLimit: number;
  CompanyEntryDescription: string;
  EstablishedDate: string;
  Currency:
    | "$ Canadian Dollar"
    | "$ Australian Dollar"
    | "$ United States Dollar";
  IndustryType:
    | "Commercial"
    | "Aerospacial"
    | "Government"
    | "Industry Type 1"
    | "Automotive";
  OrganizationDescription: string;
  Salesperson:
    | "Earl Gwynne"
    | "Olivia Harper"
    | "Lauren Cliffe"
    | "Marcus Rodriguez"
    | "Sigismond O' Mulderrig";
}

// Need to update these to all be types of Inputs. Then create the Types of Input Classes i.e. Typeahead.
// I am looking at the OrgCreate form and I see some fields are no longer here. So I will need to update the Schema in Mockaroo.
export interface OrganizationFormInputs {
  OrgCode: Textfield;
  OrgName: Textfield;
  AddressLine1: Textfield;
  AddressLine2: Textfield;
  AddressLine3: Textfield;
  City: Textfield;
  County: "Typeahead";
  State: string;
  PostCode: string;
  PhoneNumber: string;
  AlternatePhoneNumber: string;
  FaxPhone: string;
  Email: string;
  WebAddress: string;
  CustomerStatus: "Dropdown";
  CustomerProspectDate: "Datepicker";
  CustomerActiveDate: "Datepicker";
  CustomerInactiveDate: "Datepicker";
  Requires1099: string;
  Form1099Box:
    | "Rents"
    | "Royalties"
    | "Other Income"
    | "Fishing Boat Proceeds"
    | "Medical And Healthcare Payments"
    | "Non Employee Compensation"
    | "Substitute Payments In Lieu Of Dividends Or Interest"
    | "Crop Insurance Proceeds"
    | "Fish Purchased For Resale"
    | "Excess Golden Parachute Payments"
    | "Gross Proceeds Paid To An Attorney";
  SupplierStatus: string;
  SupplierProspectDate: string;
  SupplierActiveDate: string;
  SupplierInactiveDate: string;
  CreditHold: string;
  DirectPayment: string;
  BankInitials: string;
  BankRoutingNumber: string;
  BankAccountNumber: string;
  BankAccountName: string;
  BankAccountType: string;
  UsaTransactionTypeCode:
    | "Annuity"
    | "Business/Commercial"
    | "Deposit"
    | "Internet-Initiated Transaction"
    | "Loan"
    | "Miscellaneous"
    | "Mortgage"
    | "Pension"
    | "Rent/Lease"
    | "Salary/Payroll"
    | "Tax";
  CreditLimit: string;
  CompanyEntryDescription: string;
  EstablishedDate: string;
  Currency: string;
  IndustryType: string;
  OrganizationDescription: string;
  Salesperson: "Dropdown";
}
