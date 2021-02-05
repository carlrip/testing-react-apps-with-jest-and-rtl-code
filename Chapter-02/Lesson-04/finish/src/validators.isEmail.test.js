import { isEmail } from "./validators";

test("Should return true when valid email", () => {
  expect(isEmail("someone@somewhere.com")).toBe(true);
});

test("Should return false when invalid email", () => {
  expect(isEmail("someone")).toBe(false);
});
