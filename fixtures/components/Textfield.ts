import { expect, Page } from "@playwright/test";

export class Textfield {
  private page: Page;
  private selector: string;

  constructor(page: Page, selector: string) {
    this.page = page;
    this.selector = selector;
  }

  async fill(value: string) {
    const inputSelector = `${this.selector}`;
    await this.page.fill(inputSelector, value);
  }
}
