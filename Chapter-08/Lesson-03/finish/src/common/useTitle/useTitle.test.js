import React from "react";
import { useTitle } from "./useTitle";
import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

test("Should set document title (with manual test component)", () => {
  function Component() {
    useTitle("test");
    return null;
  }
  render(<Component />);
  expect(document.title).toBe("test");
});

test("Should set document title", () => {
  renderHook(() => useTitle("test"));
  expect(document.title).toBe("test");
});
