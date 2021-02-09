import { getCompany } from "./data";

test("Should return not found message when company not found", async () => {
  const company = await getCompany(-99);
});
