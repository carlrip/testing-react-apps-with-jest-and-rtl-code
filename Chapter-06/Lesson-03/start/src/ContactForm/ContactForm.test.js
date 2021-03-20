import { render, screen } from "@testing-library/react";
import { ContactForm } from "./ContactForm";
import userEvent from "@testing-library/user-event";

test("Clicking Save button when form is completed in should render a success message", async () => {
  render(<ContactForm />);

  userEvent.type(screen.getByLabelText("Name"), "test");

  userEvent.type(screen.getByLabelText("Message"), "test");
  userEvent.click(screen.getByText("Save"));

  expect(await screen.findByText("Successfully saved")).toBeInTheDocument();
});
