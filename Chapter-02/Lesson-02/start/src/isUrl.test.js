import { isUrl } from "./isUrl";

test("Should return true when valid url", () => {
  expect(isUrl("https://www.google.com")).toBe(true);
});

test("Should return false when invalid url", () => {
  expect(isUrl("google")).toBe(false);
});
