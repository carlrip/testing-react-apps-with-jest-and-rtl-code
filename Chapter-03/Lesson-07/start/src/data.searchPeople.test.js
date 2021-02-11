import { searchPeople } from "./data";

test("Should return correct array when have matches", async () => {
  const result = await searchPeople("pe");
  expect(result).toStrictEqual([
    {
      id: 1,
      firstName: "Bill",
      lastName: "Peters",
    },
    {
      id: 3,
      firstName: "Sue",
      lastName: "Peel",
    },
  ]);
});
