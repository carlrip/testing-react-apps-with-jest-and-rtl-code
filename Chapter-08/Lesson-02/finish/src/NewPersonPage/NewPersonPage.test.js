import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { NewPersonPage } from "./NewPersonPage";

test("NewPersonPage renders correct title", async () => {
  render(
    <MemoryRouter>
      <NewPersonPage />
    </MemoryRouter>
  );

  expect(screen.getByText(/New person/)).toBeInTheDocument();
});
