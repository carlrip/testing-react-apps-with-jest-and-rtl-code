import { searchPeople } from "./data";

test("Should return a person when match on first name", async () => {
  const people = await searchPeople("bill");
  expect(people.length).toBe(1);
  expect(people).toEqual([
    {
      id: 1,
      firstName: "Bill",
      lastName: "Peters",
    },
  ]);
  expect(people).toStrictEqual([
    {
      id: 1,
      firstName: "Bill",
      lastName: "Peters",
    },
  ]);
  expect(people).toContainEqual({
    id: 1,
    firstName: "Bill",
    lastName: "Peters",
  });
});
