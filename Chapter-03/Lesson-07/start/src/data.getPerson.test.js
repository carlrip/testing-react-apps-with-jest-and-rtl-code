import { getPerson } from "./data";

test("Should return correct object when valid id", async () => {
  const result = await getPerson(1);
  expect(result).toStrictEqual({
    id: 1,
    firstName: "Bill",
    lastName: "Peters",
  });
});
