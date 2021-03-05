import { render, screen } from "@testing-library/react";
import { PersonPage } from "./PersonPage";

test("Should render loading indicator when data is loading", () => {
  render(<PersonPage id={0} />);
  expect(screen.getByText("Loading ...")).toBeInTheDocument();
});
