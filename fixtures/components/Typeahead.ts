import { expect, Page } from "@playwright/test";

export class Typeahead {
  private page: Page;
  private inputSelector: string;

  constructor(page: Page, selector: string) {
    this.page = page;
    this.inputSelector = selector;
  }

  async fill(fieldLabel: string, searchedValue: string, enumValueText: string) {
    await this.page.getByLabel(fieldLabel).click();
    await this.page.getByPlaceholder("Search...").fill(searchedValue);
    await this.page.getByText(enumValueText).click();
  }
}
