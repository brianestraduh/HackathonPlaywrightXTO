import { test as setup, expect } from "@playwright/test";
import path from "path";
const authFile = path.join(__dirname, "../playwright/.auth/user.json");

setup("authenticate", async ({ page }) => {
  const baseURL = process.env.BASE_URL
    ? process.env.BASE_URL
    : "https://app.xto.dev.ecimfgtest.com/";
  const userName = process.env.USER
    ? process.env.USER
    : "brians-bearings-bolts@xto.dev.ecimfgtest.com";
  const password = process.env.PASSWORD;

  await page.goto(baseURL!);
  // Perform authentication steps. Replace these actions with your own.
  await page.locator("#username").fill(userName);
  await page.getByRole("button", { name: "Continue" }).click();
  await page.locator("#password").fill(password!);
  await page.getByRole("button", { name: "Continue" }).click();
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL("/");

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});
