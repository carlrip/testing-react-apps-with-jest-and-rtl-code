import { render, screen } from "@testing-library/react";
import { PersonPage } from "./PersonPage";

test("Should not initially render person name", () => {
  render(<PersonPage id={0} />);
  expect(screen.getByText("Herman Vandervort")).not.toBeInTheDocument();
});
