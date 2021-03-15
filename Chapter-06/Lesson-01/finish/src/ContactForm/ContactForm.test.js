import { render, screen, fireEvent } from "@testing-library/react";
import { ContactForm } from "./ContactForm";
import userEvent from "@testing-library/user-event";

test("Clicking submit button without filling in form renders name validation error", async () => {
  render(<ContactForm />);
  const saveButton = screen.getByText("Save");
  // fireEvent(saveButton, new MouseEvent("click"));
  userEvent.click(saveButton);
  expect(
    await screen.findByText("You must enter your name")
  ).toBeInTheDocument();
});
