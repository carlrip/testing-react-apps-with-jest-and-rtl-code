import { render, screen } from "@testing-library/react";
import { PersonPage } from "./PersonPage";

test("Should render person name when data has loaded", async () => {
  render(<PersonPage id={0} />);
  expect(await screen.getByText("Herman Vandervort")).toBeInTheDocument();
});
