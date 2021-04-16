import { render, screen } from "@testing-library/react";
import { NewPersonPage } from "./NewPersonPage";

test("NewPersonPage renders correct title", async () => {
  render(<NewPersonPage />);

  expect(screen.getByText(/New person/)).toBeInTheDocument();
});
