import { isUrl, isEmail } from "./validators";

describe("isEmail", () => {
  test("Should return true when valid email", () => {
    expect(isEmail("someone@somewhere.com")).toBe(true);
  });

  test("Should return false when invalid email", () => {
    expect(isEmail("someone")).toBe(false);
  });
});
describe("isUrl", () => {
  test("Should return true when valid url", () => {
    expect(isUrl("https://www.google.com")).toBe(true);
  });

  test("Should return false when invalid url", () => {
    expect(isUrl("google")).toBe(false);
  });
});
