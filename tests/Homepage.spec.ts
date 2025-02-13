import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/create/test");
});

test("Textfield basic functionality is working", async ({ page }) => {
  const requiredField = page.locator("#QATestwidthEmployeesTextRequiredField");

  await expect(
    page.getByText("Create Test Form Using Employees Entity")
  ).toBeVisible();

  // Fill the first text field
  await page
    .locator("#QATestwidthEmployeesTextField")
    .fill("Text Field is filled");

  // Fill the required text field
  await requiredField.fill("Required Field is filled");

  // Clear the required text field
  await requiredField.clear();

  // Press Tab to move focus out of the required text field
  await requiredField.press("Tab");

  // Wait for the attribute to be set
  await requiredField.waitFor({ state: "attached" });

  // Assert that the required field has the aria-invalid attribute set to true
  await expect(requiredField).not.toHaveAttribute("aria-invalid", "false");
});
