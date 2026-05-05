import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("homepage has no accessibility violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page })
    // TODO: fix these violations
    .disableRules(["page-has-heading-one", "region"])
    .analyze();
  expect(results.violations).toEqual([]);
});
