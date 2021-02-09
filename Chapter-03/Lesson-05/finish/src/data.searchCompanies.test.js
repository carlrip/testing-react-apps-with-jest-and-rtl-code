import { searchCompanies } from "./data";

test("Should return a company when partial match on name", async () => {
  const company = await searchCompanies("Dibbert");
});
