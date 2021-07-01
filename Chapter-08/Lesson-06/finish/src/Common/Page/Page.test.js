import React from "react";
import { render, screen } from "@testing-library/react";
import { Page } from "./Page";

test("Should render title and content", () => {
  render(<Page title="test title">test content</Page>);

  expect(screen.queryByText("test title")).toBeInTheDocument();
  expect(screen.queryByText("test content")).toBeInTheDocument();
});
