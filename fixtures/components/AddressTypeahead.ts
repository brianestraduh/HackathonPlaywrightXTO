import { expect, Page } from "@playwright/test";

export class AddressTypeahead {
  private page: Page;
  private inputSelector: string;

  constructor(page: Page, selector: string) {
    this.page = page;
    this.inputSelector = selector;
  }

  async fill(value: string) {
    await this.page.getByLabel(this.inputSelector, { exact: true }).fill(value);
    await expect(
      this.page.getByRole("combobox", { name: this.inputSelector })
    ).toHaveValue(value);
  }
}
