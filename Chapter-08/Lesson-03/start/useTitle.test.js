import React from "react";
import { useTitle } from "./useTitle";
import { render } from "@testing-library/react";
// import { renderHook } from "@testing-library/react-hooks";

// attempt 1
// get error
// test("Should set document title", () => {
//   useTitle("test");
//   expect(document.title).toBe("test");
// });

// attempt 2
function Component() {
  useTitle("test");
  return null;
}

test("Should set document title", () => {
  render(<Component />);
  expect(document.title).toBe("test");
});

// attempt 3
// test("Should set document title", () => {
//   renderHook(() => useTitle("test"));
//   expect(document.title).toBe("test");
// });
