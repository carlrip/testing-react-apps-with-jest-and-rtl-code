import React from "react";
import { render, screen } from "@testing-library/react";
import { ErrorMessage } from "./ErrorMessage";

test("Should render correct text and image", () => {
  render(<ErrorMessage message="test" />);

  expect(screen.getByText("test")).toBeInTheDocument();
  expect(screen.getByAltText("cross")).toBeInTheDocument();
});