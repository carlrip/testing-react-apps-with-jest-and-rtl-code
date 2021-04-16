import { render, screen } from "@testing-library/react";
import { HomePage } from "./HomePage";

test("HomePage renders app title", async () => {
  render(<HomePage />);

  expect(screen.getByText(/My App/)).toBeInTheDocument();
});
