import { getCompany } from "./data";

test("Should return correct company object when found", async () => {
  const company = await getCompany(1);
  expect(company).toStrictEqual({
    id: 1,
    name: "Dibbert Group",
  });
});
