import { expect, Page } from "@playwright/test";

export class Typeahead {
  private page: Page;
  private inputSelector: string;

  constructor(page: Page, selector: string) {
    this.page = page;
    this.inputSelector = selector;
  }

  async fill(enumValueText: string) {
    await this.page.getByLabel(this.inputSelector).click();
    await this.page.getByPlaceholder("Search...").fill(enumValueText);
    await this.page.getByText(enumValueText).click();
    await expect(this.page.getByLabel(this.inputSelector)).toHaveValue(
      enumValueText
    );
  }
}
