import { render, screen, prettyDOM, logRoles } from "@testing-library/react";
import { ErrorMessage } from "./ErrorMessage";

test("Should render correct message when message prop passed", () => {
  const { container } = render(<ErrorMessage message="test" />);
  expect(screen.getByText("test")).toBeInTheDocument();
});
