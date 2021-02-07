import { validEmailDomain } from "./validEmailDomain";

test("Should return true when known domain", () => {
  const result = validEmailDomain("jane@somewhere.com");
  expect(result).toBe(true);
});

test("Should return false when unknown domain", () => {
  const result = validEmailDomain("someone@unknown.com");
  expect(result).toBe(false);
});

test("Should return true when known domain in title case", () => {
  const result = validEmailDomain("Jane@SomeWhere.com");
  expect(result).toBe(true);
});
