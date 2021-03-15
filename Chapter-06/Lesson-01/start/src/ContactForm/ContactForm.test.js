import { render, screen, fireEvent } from "@testing-library/react";
import { ContactForm } from "./ContactForm";

test("Clicking submit button without filling in form renders name validation error", async () => {
  render(<ContactForm />);
  fireEvent(screen.getByText("Save"), new MouseEvent("click"));
  expect(
    await screen.findByText("You must enter your name")
  ).toBeInTheDocument();
});
