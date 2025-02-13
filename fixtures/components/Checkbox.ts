import { expect, Page } from "@playwright/test";

export class Checkbox {
  private page: Page;
  private inputSelector: string;

  constructor(page: Page, selector: string) {
    this.page = page;
    this.inputSelector = selector;
  }

  async checkOrUncheck(shouldBeChecked: boolean) {
    const checkbox = this.page.getByLabel(this.inputSelector);
    const isChecked = await checkbox.isChecked();

    if (shouldBeChecked === isChecked) {
      // If the desired state matches the current state, do nothing
      await expect(checkbox).toBeChecked({ checked: shouldBeChecked });
      return;
    }

    if (shouldBeChecked) {
      await checkbox.check();
    } else {
      await checkbox.uncheck();
    }

    // Verify the final state
    await expect(checkbox).toBeChecked({ checked: shouldBeChecked });
  }
}
