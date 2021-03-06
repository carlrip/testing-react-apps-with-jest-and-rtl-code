import { render, screen } from "@testing-library/react";
import { PersonPage } from "./PersonPage";

test("Should not initially render person name", () => {
  render(<PersonPage id={0} />);
  expect(screen.queryByText("Herman Vandervort")).not.toBeInTheDocument();
});

test("Should not render loading indicator when data has loaded", async () => {
  render(<PersonPage id={0} />);
  await screen.findByText("Herman Vandervort");
  expect(screen.queryByText("Loading ...")).not.toBeInTheDocument();
});
