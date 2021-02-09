import { searchPeople } from "./data";

test("Should return a person when match on first name", async () => {
  const people = await searchPeople("bill");
});
