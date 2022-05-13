import { render, screen } from "@testing-library/react";
import { ContactForm } from "./ContactForm";
import userEvent from "@testing-library/user-event";

test("Clicking Save button when form is completed in should render a success message", async () => {
  const user = userEvent.setup();
  render(<ContactForm />);
});
