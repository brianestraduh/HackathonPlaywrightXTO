import { expect, Page } from "@playwright/test";

export class Datepicker {
  private page: Page;
  private inputSelector: string;

  constructor(page: Page, selector: string) {
    this.page = page;
    this.inputSelector = selector;
  }

  async fill(date: string) {
    await this.page.getByLabel(this.inputSelector).fill(date);
    await expect(this.page.getByLabel(this.inputSelector)).toHaveValue(date);
  }
  async fillUsingPicker() {}
}
