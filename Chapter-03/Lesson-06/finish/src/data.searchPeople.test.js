import { searchPeople, searchPeopleAsync } from "./data";

test("Should raise exception when person not found", () => {
  expect(() => {
    searchPeople("tom");
  }).toThrow();

  expect(() => {
    searchPeople("tom");
  }).toThrow("No people found");

  expect(() => {
    searchPeople("tom");
  }).toThrow(Error);

  expect(() => {
    searchPeople("tom");
  }).toThrow(/no people found/i);
});

test("Should raise exception when person not found", async () => {
  expect(async () => {
    await searchPeopleAsync("tom");
  }).rejects.toThrow();

  expect(async () => {
    await searchPeopleAsync("tom");
  }).rejects.toThrow("No people found");

  expect(async () => {
    await searchPeopleAsync("tom");
  }).rejects.toThrow(Error);

  expect(async () => {
    await searchPeopleAsync("tom");
  }).rejects.toThrow(/found/i);
});
