import { expect, Page } from "@playwright/test";

export class Textfield {
  private page: Page;
  private selector: string;

  constructor(page: Page, selector: string) {
    this.page = page;
    this.selector = selector;
  }

  async fill(value: string) {
    console.log(this.selector);
    await this.page.getByLabel(this.selector, { exact: true }).fill(value);
    await expect(
      this.page.getByLabel(this.selector, { exact: true })
    ).toHaveValue(value);
  }
}
