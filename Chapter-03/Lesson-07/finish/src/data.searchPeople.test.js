import { searchPeople } from "./data";

test("Should return correct array when have matches", async () => {
  const result = await searchPeople("pe");
  expect(result).toMatchSnapshot();
});
