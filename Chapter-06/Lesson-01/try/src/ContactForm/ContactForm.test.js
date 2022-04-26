import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "./ContactForm";

test("Clicking submit button without filling in form renders name validation error", async () => {
  const user = userEvent.setup();
  render(<ContactForm />);
  const saveButton = screen.getByText("Save");

  await user.click(saveButton);

  expect(
    await screen.findByText("You must enter your name")
  ).toBeInTheDocument();
});
