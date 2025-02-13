import { expect, Page } from "@playwright/test";

export class Dropdown {
  private page: Page;
  private inputSelector: string;

  constructor(page: Page, selector: string) {
    this.page = page;
    this.inputSelector = selector;
  }

  async selectDropdownOption(enumValueText: string) {
    await this.page.getByLabel(this.inputSelector).locator("svg").click();
    await this.page.getByRole("option", { name: enumValueText }).click();
    await expect(this.page.getByText(enumValueText)).toBeVisible();
  }
  async typeAndSelectDropdownOption(enumValueText: string) {
    await this.page
      .locator("#OrganizationCreateGrdIndustryTypesFieldContainer")
      .getByText("arrow_drop_down")
      .fill(enumValueText);
    await this.page.getByRole("option", { name: enumValueText }).click();
    //NEED TO GET XPATH FOR THIS
    await expect(this.page.getByText(enumValueText)).toBeVisible();
  }
}
