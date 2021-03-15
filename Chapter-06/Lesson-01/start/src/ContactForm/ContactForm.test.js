import { render, screen } from "@testing-library/react";
import { ContactForm } from "./ContactForm";

test("Clicking submit button without filling in form renders name validation error", async () => {
  render(<ContactForm />);

  expect(
    await screen.findByText("You must enter your name")
  ).toBeInTheDocument();
});
