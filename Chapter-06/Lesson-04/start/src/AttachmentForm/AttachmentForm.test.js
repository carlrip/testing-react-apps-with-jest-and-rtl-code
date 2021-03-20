import { render, screen } from "@testing-library/react";
import { AttachmentForm } from "./AttachmentForm";
import userEvent from "@testing-library/user-event";

test("Clicking Upload button when file has been selected should render a success message containing file name", async () => {
  render(<AttachmentForm />);

  userEvent.click(screen.getByText("Upload"));
});
