import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/create/test");
});

test("Home Screen ", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("My Menu")).toBeVisible();

  await expect(page).toHaveScreenshot("xto-home.png");
});
