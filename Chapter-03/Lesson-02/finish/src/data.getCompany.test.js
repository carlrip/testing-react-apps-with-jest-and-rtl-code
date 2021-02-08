import { getCompany } from "./data";

test("Should return correct company object when found", async () => {
  const company = await getCompany(1);
  expect(company.name).toBe("Dibbert Group");
});

test("Should return undefined when not found", async () => {
  const company = await getCompany(-99);
  expect(company).toBeUndefined();
});

test("Should not return undefined when found", async () => {
  const person = await getCompany(1);
  expect(person).not.toBeUndefined();
});
