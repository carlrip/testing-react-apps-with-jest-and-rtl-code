import { getCompany } from "./data";

test("Should return correct company object when found", async () => {
  const company = await getCompany(1);
  expect(company).toBe({
    id: 1,
    name: "Dibbert Group",
  });
});
