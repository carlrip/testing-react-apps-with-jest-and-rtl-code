import { render, screen } from "@testing-library/react";
import { ContactForm } from "./ContactForm";
import userEvent from "@testing-library/user-event";

test("Clicking Save button when form is completed in should render a success message", async () => {
  const user = userEvent.setup();
  render(<ContactForm />);

  screen.getByLabelText("Name").focus();
  await user.keyboard("test");

  screen.getByLabelText("Message").focus();
  await user.keyboard("test");
  
  await user.click(screen.getByText("Save"));

  expect(await screen.findByText("Successfully saved")).toBeInTheDocument();
});
