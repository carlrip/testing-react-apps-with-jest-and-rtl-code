import { render, screen } from "@testing-library/react";
import { ErrorMessage } from "./ErrorMessage";

// test("Should render correct message when message prop passed", () => {
//   const { container } = render(<ErrorMessage message="test" />);
//   screen.debug(container);
//   screen.debug();
//   expect(screen.getByText("test")).toBeInTheDocument();
// });

test("Should render correct message when message prop passed", () => {
  render(<ErrorMessage message="test" />);
  expect(screen.getByText("shouldn't find me")).toBeInTheDocument();
});
