import { getName } from "./data";

test("getName should return correct name when 0 passed in", async () => {
  const name = await getName(0);
  expect(name).toBe("Bill");
});

test("getName should return correct name when 1 passed in", async () => {
  const name = await getName(1);
  expect(name).toBe("Jane");
});

test("getName should return null when 2 passed", async () => {
  const name = await getName(2);
  expect(name).toBe(null);
});
