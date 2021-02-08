import { getPerson } from "./data";

test("Should return correct person object when found", async () => {
  const person = await getPerson(1);
  expect(person.firstName).toBe("Bill");
});

test("Should return null when not found", async () => {
  const person = await getPerson(-99);
  expect(person).toBeNull();
});

test("Should not return null when found", async () => {
  const person = await getPerson(1);
  expect(person).not.toBeNull();
});
