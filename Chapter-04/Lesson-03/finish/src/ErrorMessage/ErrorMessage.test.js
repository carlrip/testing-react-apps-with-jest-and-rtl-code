import { render, screen } from "@testing-library/react";
import { ErrorMessage } from "./ErrorMessage";

test("Should render correct message when message prop passed", () => {
  render(<ErrorMessage message="test" />);
  expect(screen.getByText("test")).toBeInTheDocument();
});
