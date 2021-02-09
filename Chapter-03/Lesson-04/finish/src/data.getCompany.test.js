import { getCompany } from "./data";

test("Should return not found message when company not found", async () => {
  const company = await getCompany(-99);
  //expect(company).toBe("Company Not Found");
  //expect(company).toContain("Not Found");
  expect(company).toMatch(/not found/i);
});
