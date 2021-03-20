import { render, screen } from "@testing-library/react";
import { AttachmentForm } from "./AttachmentForm";
import userEvent from "@testing-library/user-event";

test("Clicking Upload button when file has been selected should render a success message containing file name", async () => {
  render(<AttachmentForm />);
  const file = new File(["test"], "test.txt", { type: "plain/text" });
  userEvent.upload(screen.getByLabelText("Attachment"), file);
  userEvent.click(screen.getByText("Upload"));
  expect(
    await screen.findByText("Successfully uploaded test.txt")
  ).toBeInTheDocument();
});

test("Clicking Upload button when two files have been selected should render a success message containing the file names", async () => {
  render(<AttachmentForm />);
  const files = [
    new File(["test1"], "test1.txt", { type: "plain/text" }),
    new File(["test2"], "test2.txt", { type: "plain/text" }),
  ];
  userEvent.upload(screen.getByLabelText("Attachment"), files);
  userEvent.click(screen.getByText("Upload"));
  expect(
    await screen.findByText("Successfully uploaded test1.txt, test2.txt")
  ).toBeInTheDocument();
});
