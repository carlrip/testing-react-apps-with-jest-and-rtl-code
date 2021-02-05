import { isUrl, isEmail } from "./validators";

test("valid email", () => {
  expect(isEmail("someone@somewhere.com")).toBe(true);
});

test("invalid email", () => {
  expect(isEmail("someone")).toBe(false);
});

test("returns true", () => {
  expect(isUrl("https://www.google.com")).toBe(true);
});

test("returns false", () => {
  expect(isUrl("google")).toBe(false);
});
