import { test, expect } from "@playwright/test";
import { OrganizationCreatePage } from "../pages/Organizations/OrganizationsCreatePage";

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page.getByText("Welcome")).toBeVisible();
});

test("login", async ({ page }) => {
  const organizationCreatePage = new OrganizationCreatePage(page);
  await page.goto("/");

  // Click the get started link.
  await page
    .locator("#username")
    .fill("brians-bearings-bolts@xto.dev.ecimfgtest.com");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.locator("#password").fill("8ztT46W2UTMmgSXSX8");
  await page.getByRole("button", { name: "Continue" }).click();
  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Welcome to XTO" })
  ).toBeVisible();
  // Testing filling a textfield
  await page.goto("/filter/organizations");
  await page.locator("#new").click();
  await expect(
    page.getByRole("heading", { name: "Create Organization" })
  ).toBeVisible();
  // fill form
  await organizationCreatePage.fillForm("Brian Org", "BGE");
});
