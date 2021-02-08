import { getPerson } from "./data";

test("Should return correct person object when found", async () => {
  const person = await getPerson(1);
  expect(person.firstName).toBe("Bill");
});
