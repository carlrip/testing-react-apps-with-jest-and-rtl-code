import { render, screen } from "@testing-library/react";
import { PersonPage } from "./PersonPage";

// test("Should render loading indicator when data is loading", () => {
//   render(<PersonPage id={0} />);
//   expect(screen.getByText("Loading ...")).toBeInTheDocument();
// });

test("Should render loading indicator when data is loading", () => {
  render(<PersonPage id={0} />);
  expect(screen.getAllByText("Loading ...")).toHaveLength(2);
});

test("Should render person name when data has loaded", async () => {
  render(<PersonPage id={0} />);
  expect(await screen.getByText("Herman Vandervort")).toBeInTheDocument();
});
