import { render, screen } from "@testing-library/react";
import { PersonForm } from "./PersonForm";
import userEvent from "@testing-library/user-event";

test("Should render success message when form successfully submitted", async () => {
  // TODO - mock fetch
  render(<PersonForm />);
  // TODO - submit the form with a name of Fred and a score of 10
  expect(await screen.findByText(/successfully added/i)).toBeInTheDocument();
  // TODO - restore fetch
});

test("Should render error message when invalid form submitted", async () => {
  // TODO - mock fetch
  render(<PersonForm />);
  // TODO - submit the form with a name of Fred and a score of 10
  expect(await screen.findByText(/problem/i)).toBeInTheDocument();
  // TODO - restore fetch
});
