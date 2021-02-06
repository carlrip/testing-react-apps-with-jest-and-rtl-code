import { validEmailDomain } from "./validEmailDomain";

test("Should return true when known domain", () => {
  const result = validEmailDomain("jane@someWhere.com");
  expect(result).toBe(true);
});

test("Should return false when unknown domain", () => {
  const result = validEmailDomain("someone@unknown.com");
  expect(result).toBe(false);
});
